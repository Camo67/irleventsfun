import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Layout } from './Layout';
import { Play, Heart, MessageCircle, Share, ExternalLink, Loader2 } from 'lucide-react';

interface GalleryPageProps {
  navigateTo: (page: string) => void;
}

export function GalleryPage({ navigateTo }: GalleryPageProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'instagram' | 'tiktok'>('all');
  const [embedsLoaded, setEmbedsLoaded] = useState(false);

  // TikTok embed URLs - these would come from your actual TikTok posts
  const tiktokEmbeds = [
    'https://www.tiktok.com/embed/v2/7234567890123456789',
    'https://www.tiktok.com/embed/v2/7234567890123456790',
    'https://www.tiktok.com/embed/v2/7234567890123456791'
  ];

  // Instagram embed posts - these would come from Instagram's API
  const instagramPosts = [
    {
      id: '1',
      shortcode: 'ABC123def456',
      caption: 'Check out our amazing GSNL Game Show Night Live event! 🎮✨',
      thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/p/ABC123def456/'
    },
    {
      id: '2',
      shortcode: 'DEF456ghi789',
      caption: 'Water Cooler Sports bringing teams together! 🏆⚽',
      thumbnail: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/p/DEF456ghi789/'
    },
    {
      id: '3',
      shortcode: 'GHI789jkl012',
      caption: 'BADA Brunch vibes are unmatched! 🥂✨',
      thumbnail: 'https://images.unsplash.com/photo-1529603992250-dee73a2249a5?w=400&h=400&fit=crop',
      permalink: 'https://www.instagram.com/p/GHI789jkl012/'
    }
  ];

  // Load external scripts for embeds
  useEffect(() => {
    const loadEmbedScripts = async () => {
      // Load TikTok embed script
      if (!document.querySelector('script[src*="tiktok"]')) {
        const tiktokScript = document.createElement('script');
        tiktokScript.src = 'https://www.tiktok.com/embed.js';
        tiktokScript.async = true;
        document.head.appendChild(tiktokScript);
      }

      // Load Instagram embed script
      if (!document.querySelector('script[src*="instagram"]')) {
        const instagramScript = document.createElement('script');
        instagramScript.src = 'https://www.instagram.com/embed.js';
        instagramScript.async = true;
        document.head.appendChild(instagramScript);
      }

      setEmbedsLoaded(true);
    };

    loadEmbedScripts();
  }, []);

  const TikTokEmbed = ({ embedUrl }: { embedUrl: string }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
      <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-[1.02]">
        <div className="aspect-[9/16] relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-center p-4">
              <div>
                <p className="mb-2">Unable to load TikTok embed</p>
                <a 
                  href="https://tiktok.com/@irleventsfun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  View on TikTok
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setError(true);
              }}
              className="absolute inset-0"
            />
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-cyan-300 text-sm font-semibold">@irleventsfun</span>
            <div className="bg-black text-white px-2 py-1 rounded text-xs">
              TikTok
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InstagramEmbed = ({ post }: { post: typeof instagramPosts[0] }) => {
    const [showEmbed, setShowEmbed] = useState(false);

    return (
      <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300 hover:scale-[1.02]">
        {showEmbed ? (
          <div className="aspect-square">
            <iframe
              src={`https://www.instagram.com/p/${post.shortcode}/embed`}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowTransparency
              className="border-0"
            />
          </div>
        ) : (
          <>
            <div className="aspect-square relative group cursor-pointer" onClick={() => setShowEmbed(true)}>
              <img 
                src={post.thumbnail}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                Instagram
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-300 text-sm font-semibold">@irleventsfun</span>
                <button 
                  onClick={() => setShowEmbed(true)}
                  className="text-cyan-400 hover:text-cyan-300 text-xs"
                >
                  Load Embed
                </button>
              </div>
              <p className="text-white text-sm mb-3 line-clamp-2">{post.caption}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-pink-400" />
                    <span className="text-gray-300 text-xs">View on IG</span>
                  </div>
                </div>
                <a 
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const LiveFeedSection = () => {
    const [feedData, setFeedData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading live feed data
      // In a real implementation, you'd fetch from Instagram Basic Display API or TikTok API
      const simulateAPICall = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setFeedData([
          {
            id: 'live1',
            platform: 'instagram',
            content: 'Live from our current event! 🎉',
            timestamp: 'Live now',
            thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=400&fit=crop'
          },
          {
            id: 'live2', 
            platform: 'tiktok',
            content: 'Check out this amazing moment! ✨',
            timestamp: '5 min ago',
            thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop'
          }
        ]);
        setLoading(false);
      };

      simulateAPICall();
    }, []);

    if (loading) {
      return (
        <div className="text-center py-12">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-cyan-300">Loading live feed...</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedData.map((item) => (
          <div key={item.id} className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-400 hover:bg-black/50 transition-all duration-300">
            <div className="aspect-square relative">
              <img 
                src={item.thumbnail}
                alt={item.content}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.platform === 'tiktok' 
                    ? 'bg-black text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                }`}>
                  {item.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
                </div>
                {item.timestamp === 'Live now' && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                    LIVE
                  </div>
                )}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-cyan-300 text-sm font-semibold">@irleventsfun</span>
                <span className="text-gray-400 text-xs">{item.timestamp}</span>
              </div>
              <p className="text-white text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const filteredContent = () => {
    if (activeTab === 'instagram') {
      return instagramPosts.map((post) => (
        <InstagramEmbed key={post.id} post={post} />
      ));
    }
    if (activeTab === 'tiktok') {
      return tiktokEmbeds.map((url, index) => (
        <TikTokEmbed key={index} embedUrl={url} />
      ));
    }
    // Show mixed content for 'all'
    return [
      ...instagramPosts.slice(0, 2).map((post) => (
        <InstagramEmbed key={post.id} post={post} />
      )),
      ...tiktokEmbeds.slice(0, 2).map((url, index) => (
        <TikTokEmbed key={`tiktok-${index}`} embedUrl={url} />
      ))
    ];
  };

  return (
    <Layout 
      navigateTo={navigateTo} 
      showBackButton={true} 
      backButtonText="← Back to Home"
      backButtonAction={() => navigateTo('home')}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-100 bg-clip-text text-transparent mb-4">
            Live Social Gallery
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Follow our latest events and behind-the-scenes content
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://instagram.com/irleventsfun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Follow on Instagram
            </a>
            <a 
              href="https://tiktok.com/@irleventsfun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Follow on TikTok
            </a>
          </div>
        </div>

        {/* Live Feed Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            🔴 Live Feed
          </h2>
          <LiveFeedSection />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-black font-semibold'
                  : 'text-cyan-300 hover:text-white'
              }`}
            >
              All Posts
            </button>
            <button
              onClick={() => setActiveTab('instagram')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold'
                  : 'text-cyan-300 hover:text-white'
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('tiktok')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'tiktok'
                  ? 'bg-black text-white font-semibold'
                  : 'text-cyan-300 hover:text-white'
              }`}
            >
              TikTok
            </button>
          </div>
        </div>

        {/* Embedded Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {embedsLoaded ? (
            filteredContent()
          ) : (
            <div className="col-span-full text-center py-12">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
              <p className="text-cyan-300">Loading social media embeds...</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105">
            Load More Posts
          </Button>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Want to Be Featured?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Book one of our amazing events and you might see your event featured on our social media! 
            Tag us @irleventsfun in your posts.
          </p>
          <div className="space-x-4">
            <Button 
              onClick={() => navigateTo('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 transition-all duration-300 hover:scale-105"
            >
              Book Your Event
            </Button>
            <Button 
              onClick={() => navigateTo('programs')}
              className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-3"
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}