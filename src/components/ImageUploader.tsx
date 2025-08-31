import React, { useState, useRef, useCallback } from 'react';
import { Upload, Link, X, Image as ImageIcon, AlertCircle, Search } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageUrl: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateImage = (file: File): boolean => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, WebP, or GIF)');
      return false;
    }

    if (file.size > maxSize) {
      setError('Image size must be less than 10MB');
      return false;
    }

    return true;
  };

  const handleFileUpload = useCallback((files: FileList) => {
    const file = files[0];
    if (!file || !validateImage(file)) return;

    setError(null);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewImage(result);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  }, [handleFileUpload]);

  const handleUrlSubmit = async () => {
    if (!imageUrl.trim()) {
      setError('Please enter a valid image URL');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      // Validate URL format
      new URL(imageUrl);

      // Test if image loads
      const img = new Image();
      img.crossOrigin = 'anonymous';

      img.onload = () => {
        setPreviewImage(imageUrl);
        setIsLoading(false);
      };

      img.onerror = () => {
        setError('Unable to load image from this URL. Please check the URL and try again.');
        setIsLoading(false);
      };

      img.src = imageUrl;
    } catch {
      setError('Please enter a valid URL');
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (previewImage) {
      onImageUpload(previewImage);
    }
  };

  const clearImage = () => {
    setPreviewImage(null);
    setImageUrl('');
    setError(null);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Upload Area */}
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Find Products with Visual Search</h2>

        {!previewImage ? (
          <div className="space-y-5">
            {/* Drag and Drop Area */}
            <div
              className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${dragActive
                ? 'border-indigo-400 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => e.target.files && handleFileUpload(e.target.files)}
              />

              <div className="space-y-3">
                <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${dragActive ? 'bg-indigo-100' : 'bg-gray-100'
                  }`}>
                  <Upload className={`w-6 h-6 ${dragActive ? 'text-indigo-500' : 'text-gray-400'}`} />
                </div>

                <div>
                  <p className="text-base font-medium text-gray-700">
                    {dragActive ? 'Drop image to upload' : 'Drag & drop your image'}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">or</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-2 px-5 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors duration-200 shadow-sm hover:shadow"
                  >
                    Browse Files
                  </button>
                </div>

                <p className="text-xs text-gray-400 mt-2">
                  Supports JPEG, PNG, WebP, GIF • Max 10MB
                </p>
              </div>
            </div>

            {/* URL Input */}
            <div className="flex items-center my-3">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-gray-400 text-xs px-2">or enter URL</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Link className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-gray-700 text-sm">Image URL</span>
              </div>
              <div className="flex space-x-2">
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300"
                  onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
                />
                <button
                  onClick={handleUrlSubmit}
                  disabled={!imageUrl.trim() || isLoading}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isLoading ? '...' : 'Load'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Preview Area */
          <div className="flex flex-col items-center space-y-5">
            <div className="relative inline-block">
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-72 rounded-md shadow-sm border border-gray-200"
              />
              <button
                onClick={clearImage}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-400 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors shadow-sm text-xs"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={handleSearch}
              className="px-5 py-2.5 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors duration-200 shadow-sm hover:shadow flex items-center justify-center"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Similar Products
            </button>
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start space-x-2">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;