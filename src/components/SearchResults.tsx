import React, { useState, useMemo } from 'react';
import { ArrowLeft, Filter, SortDesc, Star, ExternalLink, Loader, Tag } from 'lucide-react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
  uploadedImage: string | null;
  isLoading: boolean;
  recognizedTags: string[];
  onReset: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  uploadedImage,
  isLoading,
  recognizedTags,
  onReset
}) => {
  const [minSimilarity, setMinSimilarity] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'similarity' | 'price'>('similarity');

  const categories = useMemo(() => {
    const cats = ['all', ...new Set(results.map(r => r.product.category))];
    return cats;
  }, [results]);

  const filteredResults = useMemo(() => {
    let filtered = results.filter(r => r.similarity >= minSimilarity);

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.product.category === selectedCategory);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'similarity') {
        return b.similarity - a.similarity;
      } else {
        return (a.product.price || 0) - (b.product.price || 0);
      }
    });

    return filtered;
  }, [results, minSimilarity, selectedCategory, sortBy]);

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return 'text-emerald-700 bg-emerald-100';
    if (similarity >= 80) return 'text-indigo-700 bg-indigo-100';
    if (similarity >= 70) return 'text-amber-700 bg-amber-100';
    return 'text-gray-700 bg-gray-100';
  };

  const getSimilarityStars = (similarity: number) => {
    const stars = Math.round(similarity / 20);
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < stars ? 'text-amber-400 fill-current' : 'text-gray-300'
          }`}
      />
    ));
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto h-full min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 text-center w-full max-w-md">
          <div className="space-y-5">
            <div className="flex justify-center">
              <Loader className="w-10 h-10 text-indigo-500 animate-spin" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Processing Your Image</h2>
              <p className="text-gray-600 text-sm">
                Analyzing visual features and finding similar products...
              </p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-indigo-500 h-1.5 rounded-full animate-pulse"
                style={{ width: '65%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 font-sans p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <button
          onClick={onReset}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200 self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">New Search</span>
        </button>

        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Found {filteredResults.length} Similar Product{filteredResults.length !== 1 ? 's' : ''}
        </h1>

        <div className="hidden sm:block w-20"></div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-5">
          {/* Uploaded Image with Recognized Tags */}
          {uploadedImage && (
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Your Image</h3>
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-full rounded-md shadow-xs border border-gray-200"
              />
              
              {/* Recognized Tags */}
              {recognizedTags.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Tag className="w-3.5 h-3.5 text-gray-500" />
                    <h4 className="font-medium text-gray-800 text-sm">Recognized Features</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recognizedTags.slice(0, 5).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Filters */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-5 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-gray-600" />
              <h3 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Filters</h3>
            </div>

            {/* Similarity Threshold */}
            <div className="space-y-2 mb-5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-gray-700">
                  Minimum Similarity
                </label>
                <span className="text-xs font-medium text-indigo-600">{minSimilarity}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="95"
                step="5"
                value={minSimilarity}
                onChange={(e) => setMinSimilarity(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-full slider"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-2 mb-5">
              <label className="text-xs font-medium text-gray-700">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-400 text-sm"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <SortDesc className="w-4 h-4 text-gray-600" />
                <label className="text-xs font-medium text-gray-700">Sort By</label>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'similarity' | 'price')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-400 text-sm"
              >
                <option value="similarity">Similarity Score</option>
                <option value="price">Price (Low to High)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="lg:col-span-3">
          {filteredResults.length === 0 ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Products Found</h3>
              <p className="text-gray-600 text-sm">
                Try adjusting your filters or upload a different image.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {filteredResults.map((result, index) => (
                <div
                  key={`${result.product.id}-${index}`}
                  className="bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
                >
                  <div className="relative">
                    <img
                      src={result.product.image}
                      alt={result.product.name}
                      className="w-full h-44 object-cover"
                    />
                    <div className={`absolute top-2 right-2 px-2 py-1 rounded-md text-xs font-semibold ${getSimilarityColor(result.similarity)}`}>
                      {Math.round(result.similarity)}% match
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1 text-sm line-clamp-1">{result.product.name}</h3>
                      <p className="text-xs text-gray-600 uppercase tracking-wide">{result.product.category}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {getSimilarityStars(result.similarity)}
                      <span className="text-xs text-gray-600 ml-1.5">
                        {Math.round(result.similarity)}% similar
                      </span>
                    </div>

                    {result.product.price && (
                      <div className="text-lg font-bold text-emerald-600">
                        ${result.product.price.toFixed(2)}
                      </div>
                    )}

                    <p className="text-xs text-gray-600 line-clamp-2">
                      {result.product.description}
                    </p>

                    {result.product.sourceUrl && (
                      <a
                        href={result.product.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500 text-white text-xs font-medium rounded-md hover:bg-indigo-600 transition-colors duration-200"
                      >
                        <span>View Product</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;