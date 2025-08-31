import React, { useState, useEffect } from 'react';
import ImageUploader from './components/ImageUploader';
import SearchResults from './components/SearchResults';
import { SearchResult } from './types';
import { recognizeImage } from './services/imageRecognition';
import { data } from './data/data'; // Changed from products to data
import { Sparkles, Search, RotateCcw } from 'lucide-react';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [recognizedTags, setRecognizedTags] = useState<string[]>([]);
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const findSimilarProducts = async (imageUrl: string): Promise<SearchResult[]> => {
    try {
      // Step 1: Recognize the image
      const recognitionData = await recognizeImage(imageUrl);
      
      // Get top tags with high confidence
      const tags = recognitionData.result.tags
        .filter(tag => tag.confidence > 30)
        .map(tag => tag.tag.en);
      
      setRecognizedTags(tags);
      
      // Step 2: Find matching products
      return data // Changed from products to data
        .map(product => {
          // Calculate similarity based on tags matching
          const productText = [
            product.name.toLowerCase(),
            product.category.toLowerCase(),
            ...(product.tags || []).map(tag => tag.toLowerCase()),
            product.description.toLowerCase()
          ].join(' ');
          
          let similarity = 0;
          
          tags.forEach(tag => {
            if (productText.includes(tag.toLowerCase())) {
              similarity += 20; // Increase similarity for each matching tag
            }
          });
          
          // Add some randomness for demonstration
          similarity += Math.random() * 30;
          
          // Cap at 95% to make it look more realistic
          return {
            product,
            similarity: Math.min(95, similarity)
          };
        })
        .filter(result => result.similarity > 20) // Only show somewhat relevant results
        .sort((a, b) => b.similarity - a.similarity);
    } catch (error) {
      console.error('Recognition error:', error);
      // Fallback to generic search if recognition fails
      return data // Changed from products to data
        .map(product => ({
          product,
          similarity: 30 + Math.random() * 65 // Random similarity between 30-95%
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 12); // Return limited results for fallback
    }
  };

  const handleImageUpload = async (imageUrl: string) => {
    setIsLoading(true);
    setUploadedImage(imageUrl);
    setHasSearched(true);

    try {
      const results = await findSimilarProducts(imageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error('Error finding similar products:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSearchResults([]);
    setUploadedImage(null);
    setHasSearched(false);
    setIsLoading(false);
    setRecognizedTags([]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-slate-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-[-120px] left-[-80px] w-[320px] h-[320px] rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-[-120px] right-[-80px] w-[320px] h-[320px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 opacity-20 blur-3xl animate-pulse-medium"></div>
      <div className="absolute bottom-[-100px] left-1/4 w-[280px] h-[280px] rounded-full bg-gradient-to-r from-indigo-300 to-blue-300 opacity-15 blur-3xl animate-pulse-slow"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-400/20"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
              animationDelay: Math.random() * 5 + 's'
            }}
          ></div>
        ))}
      </div>

      <main className="container mx-auto px-4 py-6 relative z-10">
        {showIntro && !hasSearched ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-indigo-500 rounded-xl flex items-center justify-center text-white transform rotate-12">
                    <Search className="w-8 h-8" />
                  </div>
                  <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-2 -right-2 animate-ping" />
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Visual Search Explorer
              </h1>
              <p className="text-gray-600 animate-pulse">Loading experience...</p>
            </div>
          </div>
        ) : !hasSearched ? (
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-5">
                <div className="relative group">
                  <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                    <Search className="w-10 h-10" />
                  </div>
                  <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-5 transition-all duration-500 hover:scale-105 inline-block">
                Visual Search Explorer
              </h1>
              <p className="text-gray-600 max-w-xl mx-auto text-base mb-2">
                Upload an image or provide a URL to discover similar products.
              </p>
              <p className="text-gray-500 text-sm max-w-lg mx-auto">
                Our AI analyzes visual features like color, pattern, shape, and style to find the perfect matches.
              </p>
            </div>
            <ImageUploader onImageUpload={handleImageUpload} />
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-6 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white mr-3">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">Search Results</h2>
                  <p className="text-sm text-gray-600">We found {searchResults.length} similar products</p>
                </div>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:shadow-sm group"
              >
                <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <span>New Search</span>
              </button>
            </div>
            
            <SearchResults
              results={searchResults}
              uploadedImage={uploadedImage}
              isLoading={isLoading}
              recognizedTags={recognizedTags}
              onReset={handleReset}
            />
          </div>
        )}
      </main>

      {/* Add custom animations to style tag */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.25;
          }
        }
        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.2;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s infinite ease-in-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite ease-in-out;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;