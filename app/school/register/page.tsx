'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Upload } from 'lucide-react';
import Image from 'next/image';

export default function RegisterSchoolPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    schoolName: '',
    phone: '',
    email: '',
    location: '',
    logo: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, logo: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      // Basic validation for step 1
      if (formData.schoolName && formData.phone && formData.email) {
        setStep(2);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation for step 2
    if (formData.location) {
      console.log('School registration data:', formData);
      // Redirect to success page
      router.push('/school/register/success');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Register School
          </h1>
          
          {step === 2 && (
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4 text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          )}
          
          <p className="text-sm text-gray-600 mb-6">
            Step {step} of 2: Registering school
          </p>

          {step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-5">
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  placeholder="Enter school name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  School Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your school email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-colors"
              >
                Next
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Logo
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    id="logo"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="logo"
                    className="cursor-pointer flex flex-col items-center"
                  >
                    {logoPreview ? (
                      <div className="mb-2">
                        <Image
                          src={logoPreview}
                          alt="School logo preview"
                          width={100}
                          height={100}
                          className="rounded-md object-cover"
                        />
                      </div>
                    ) : (
                      <Upload className="w-12 h-12 text-gray-400 mb-2" />
                    )}
                    <span className="text-sm text-gray-600">
                      {logoPreview ? 'Change logo' : 'Upload a school logo'}
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  School Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter school location"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-400"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-md transition-colors"
              >
                Confirm
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/school-image.jpg)',
            backgroundColor: '#f0f0f0'
          }}
        >
          {/* Fallback gradient if image doesn't exist */}
          <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-purple-100 opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
