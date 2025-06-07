
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this data to your backend
      // For now we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
    
    // Log the form data (in a real app, this would be sent to a backend API)
    console.log("Form submitted with data:", formData);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Get In Touch</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Email</h4>
                  <p className="text-purple-600">imakena@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Phone</h4>
                  <p className="text-purple-600">+254 722 124 963</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">WhatsApp</h4>
                  <a 
                    href="https://wa.me/254722124963" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:underline"
                  >
                    +254 722 124 963
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Location</h4>
                  <p className="text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/imakena/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:underline"
                  >
                    linkedin.com/in/imakena
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">GitHub</h4>
                  <a 
                    href="https://github.com/imakena2" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-600 hover:underline"
                  >
                    github.com/imakena2
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-slate-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-slate-300"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-slate-300"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-slate-300"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
