
// Simulated backend API service for NuFormSocial

/**
 * Base API class for handling requests
 */
class ApiService {
  private baseUrl: string;
  
  constructor() {
    // In a real application, this would be an environment variable
    this.baseUrl = "/api";
  }
  
  /**
   * Handle API errors
   */
  private handleError(error: any) {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
  
  /**
   * Make a GET request to the API
   */
  async get<T>(endpoint: string): Promise<T> {
    try {
      // In a real app, this would make an actual fetch call
      // We're simulating for demo purposes
      const mockData = await this.getMockData(endpoint);
      return mockData as T;
    } catch (error) {
      return this.handleError(error);
    }
  }
  
  /**
   * Make a POST request to the API
   */
  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      // In a real app, this would make an actual fetch call
      // We're simulating for demo purposes
      console.log(`POST request to ${endpoint} with data:`, data);
      const mockResponse = { success: true, message: "Request successful" };
      return mockResponse as unknown as T;
    } catch (error) {
      return this.handleError(error);
    }
  }
  
  /**
   * Simulate getting data from an API endpoint
   */
  private async getMockData(endpoint: string): Promise<any> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return different mock data based on the endpoint
    switch (endpoint) {
      case "/services":
        return [
          {
            id: 1,
            title: "SEO Optimization",
            description: "Improve your search rankings and drive targeted traffic."
          },
          {
            id: 2,
            title: "Paid Advertising",
            description: "Strategic campaigns across search, social, and display networks."
          },
          {
            id: 3,
            title: "Social Media Management",
            description: "Engage your audience and build brand loyalty."
          },
          // More services...
        ];
      
      case "/testimonials":
        return [
          {
            id: 1,
            quote: "NuFormSocial increased our conversion rate by 45% in just three months.",
            author: "Rebecca Torres",
            position: "Marketing VP",
            company: "Retail Innovations",
            avatar: "/placeholder.svg"
          },
          // More testimonials...
        ];
      
      default:
        return { message: "Endpoint not found" };
    }
  }
}

export default new ApiService();
