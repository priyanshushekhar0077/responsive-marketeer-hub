
import apiService from './index';

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Contact form API service
 */
export class ContactService {
  /**
   * Submit contact form data to the API
   */
  async submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      // In a real application, this would send data to a backend API
      console.log("Submitting contact form:", formData);
      
      // Validate the form data
      this.validateFormData(formData);
      
      // Send the form data to the API
      const response = await apiService.post<{ success: boolean; message: string }>(
        "/contact",
        formData
      );
      
      return response;
    } catch (error) {
      console.error("Error submitting contact form:", error);
      
      if (error instanceof Error) {
        return { success: false, message: error.message };
      }
      
      return { success: false, message: "An unknown error occurred" };
    }
  }
  
  /**
   * Validate the form data
   */
  private validateFormData(formData: ContactFormData): void {
    if (!formData.name || formData.name.trim() === "") {
      throw new Error("Name is required");
    }
    
    if (!formData.email || formData.email.trim() === "") {
      throw new Error("Email is required");
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      throw new Error("Please enter a valid email address");
    }
    
    if (!formData.message || formData.message.trim() === "") {
      throw new Error("Message is required");
    }
  }
}

export default new ContactService();
