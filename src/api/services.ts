
import apiService from './index';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

/**
 * Services API service
 */
export class ServicesService {
  /**
   * Get all services
   */
  async getAllServices(): Promise<Service[]> {
    try {
      const services = await apiService.get<Service[]>("/services");
      return services;
    } catch (error) {
      console.error("Error fetching services:", error);
      return [];
    }
  }
  
  /**
   * Get a service by ID
   */
  async getServiceById(id: number): Promise<Service | null> {
    try {
      const services = await this.getAllServices();
      const service = services.find(s => s.id === id);
      return service || null;
    } catch (error) {
      console.error(`Error fetching service with ID ${id}:`, error);
      return null;
    }
  }
}

export default new ServicesService();
