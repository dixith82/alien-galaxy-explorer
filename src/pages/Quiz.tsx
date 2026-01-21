import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { quizQuestions, getAlienResult } from '@/data/quizData';
import { aliensData } from '@/data/aliensData';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  
  const resultAlien = useMemo(() => {
    if (!showResult) return null;
    const alienId = getAlienResult(answers);
    return aliensData.find((a) => a.id === alienId) || aliensData[0];
  }, [answers, showResult]);

  const handleOptionSelect = (alienId: number) => {
    setSelectedOption(alienId);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult && resultAlien) {
    return (
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Result Card */}
            <div 
              className="relative rounded-3xl overflow-hidden bg-card border border-border p-8 animate-scale-in"
              style={{
                boxShadow: `0 0 60px ${resultAlien.color}30`
              }}
            >
              {/* Background glow */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${resultAlien.color}, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="font-display text-lg text-primary uppercase tracking-wider">
                    Your Result
                  </span>
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>

                <h1 
                  className="font-display text-5xl md:text-6xl font-black mb-6"
                  style={{ 
                    color: resultAlien.color,
                    textShadow: `0 0 30px ${resultAlien.color}80`
                  }}
                >
                  {resultAlien.name}
                </h1>

                {/* Alien Image */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div 
                    className="absolute inset-0 rounded-full animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${resultAlien.color}40, transparent 70%)`
                    }}
                  />
                  <img
                    src={resultAlien.image}
                    alt={resultAlien.name}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>

                <p className="text-muted-foreground mb-4 text-lg">
                  {resultAlien.species} from {resultAlien.planet}
                </p>

                <p className="text-foreground/80 mb-8 leading-relaxed">
                  {resultAlien.description}
                </p>

                {/* Powers */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {resultAlien.powers.map((power, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {power}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="font-display border-border hover:border-primary"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Take Quiz Again
                  </Button>
                  <Link to={`/alien/${resultAlien.id}`}>
                    <Button
                      className="font-display bg-primary hover:bg-primary/90 text-primary-foreground omnitrix-glow"
                    >
                      View Full Profile
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Which <span className="text-primary omnitrix-text-glow">Alien</span> Are You?
            </h1>
            <p className="text-muted-foreground">
              Answer {quizQuestions.length} questions to discover your alien match
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-display text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">
              {question.question}
            </h2>

            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.alienId)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-300",
                    "hover:border-primary/50 hover:bg-primary/5",
                    selectedOption === option.alienId
                      ? "border-primary bg-primary/10 shadow-lg"
                      : "border-border bg-secondary/30"
                  )}
                  style={{
                    boxShadow: selectedOption === option.alienId 
                      ? '0 0 20px hsl(var(--primary) / 0.3)' 
                      : undefined
                  }}
                >
                  <span className={cn(
                    "font-body",
                    selectedOption === option.alienId 
                      ? "text-primary font-medium" 
                      : "text-foreground/80"
                  )}>
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              onClick={handlePrevious}
              variant="ghost"
              disabled={currentQuestion === 0}
              className="font-display"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="font-display bg-primary hover:bg-primary/90 text-primary-foreground omnitrix-glow"
            >
              {currentQuestion === quizQuestions.length - 1 ? (
                <>
                  See Result
                  <Sparkles className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
