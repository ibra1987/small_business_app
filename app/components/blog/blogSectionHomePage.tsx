import { Clock, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Essential Growth Strategies for Small Businesses',
    excerpt: 'Learn proven strategies to scale your business effectively while maintaining operational efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    category: 'Growth',
    readTime: '8 min read',
    author: 'Sarah Johnson',
  },
  {
    title: 'Streamlining Customer Support with Modern Tools',
    excerpt: 'Discover how implementing the right ticketing system can transform your customer service experience.',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    category: 'Tools',
    readTime: '6 min read',
    author: 'Michael Chen',
  },
  {
    title: 'Financial Management Tips for Small Businesses',
    excerpt: 'Expert advice on managing invoices, tracking expenses, and maintaining healthy cash flow.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    category: 'Finance',
    readTime: '10 min read',
    author: 'David Wilson',
  },
];

export function BlogSection() {
  return (
    <div id="blog" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Business Insights
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Expert advice and strategies to help your business thrive
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:translate-y-[-4px]">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">{post.category}</p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                  </a>
                </div>
                <div className="mt-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                    <Clock className="h-4 w-4 ml-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <a href="#" className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-500">
                    Read full article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
            View all articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}