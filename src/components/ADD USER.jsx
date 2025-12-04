import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import Toggle from './Toggle';
import ProgressIndicator from './ProgressIndicator';
import elephantImg from '../assets/elephant.png';
import monkeyImg from '../assets/monkey.png';

const AddUserForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        organization: '',
        school: '',
        schoolActive: true,
        city: '',
        state: '',
        zipCode: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
    });

    const steps = ['School Info', 'User Details'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateStep = (step) => {
        const newErrors = {};

        if (step === 0) {
            if (!formData.organization) newErrors.organization = 'Organization is required';
            if (!formData.school) newErrors.school = 'School name is required';
            if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
        } else if (step === 1) {
            if (!formData.firstName) newErrors.firstName = 'First name is required';
            if (!formData.lastName) newErrors.lastName = 'Last name is required';
            if (!formData.email) {
                newErrors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Email is invalid';
            }
            if (!formData.role) newErrors.role = 'User role is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            console.log('Form Submitted:', formData);
            alert('User added successfully! (Check console for data)');
            // Reset form
            setCurrentStep(0);
            setFormData({
                organization: '',
                school: '',
                schoolActive: true,
                city: '',
                state: '',
                zipCode: '',
                firstName: '',
                lastName: '',
                email: '',
                role: '',
            });
        }
    };

    const renderStepContent = () => {
        if (currentStep === 0) {
            return (
                <div className="animate-fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold text-coral-red mb-4 sm:mb-6">Add a User</h2>

                    <div className="mb-6">
                        <Select
                            label="Organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            options={[
                                { value: 'org1', label: 'Sunshine District' },
                                { value: 'org2', label: 'Rainbow Academy' },
                            ]}
                            placeholder="Select Organization"
                        />
                        {errors.organization && <p className="text-coral-red text-sm mt-1">{errors.organization}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                        <div>
                            <Input
                                label="School"
                                name="school"
                                value={formData.school}
                                onChange={handleChange}
                                required
                                placeholder="Enter school name"
                            />
                            {errors.school && <p className="text-coral-red text-sm mt-1">{errors.school}</p>}
                        </div>
                        <div className="flex items-end pb-4">
                            <Toggle
                                label="Active School"
                                name="schoolActive"
                                checked={formData.schoolActive}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                        <Input
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                        <Input
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                        <div>
                            <Input
                                label="Zip Code"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                required
                                placeholder="Zip Code"
                            />
                            {errors.zipCode && <p className="text-coral-red text-sm mt-1">{errors.zipCode}</p>}
                        </div>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex-1 bg-soft-blue hover:bg-soft-blue/80 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                        >
                            Add School
                        </button>
                        <button
                            type="button"
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-dark-gray-text font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-md active:scale-95"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="animate-fade-in">
                    <h2 className="text-2xl sm:text-3xl font-bold text-coral-red mb-4 sm:mb-6">User Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Select
                            label="Organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                            options={[
                                { value: 'org1', label: 'Sunshine District' },
                                { value: 'org2', label: 'Rainbow Academy' },
                            ]}
                            placeholder="Select Organization"
                        />
                        <Input
                            label="School"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                            placeholder="School name"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                        <div>
                            <Input
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="Jane"
                            />
                            {errors.firstName && <p className="text-coral-red text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div>
                            <Input
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Doe"
                            />
                            {errors.lastName && <p className="text-coral-red text-sm mt-1">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <Input
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="jane.doe@example.com"
                        />
                        {errors.email && <p className="text-coral-red text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <Select
                            label="User Role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                            options={[
                                { value: 'admin', label: 'Administrator' },
                                { value: 'teacher', label: 'Teacher' },
                                { value: 'student', label: 'Student' },
                            ]}
                            placeholder="Select Role"
                        />
                        {errors.role && <p className="text-coral-red text-sm mt-1">{errors.role}</p>}
                    </div>

                    {/* Info note removed: message moved into the decorative cloud on the page */}

                    <div className="flex space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-dark-gray-text font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-md active:scale-95"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-soft-blue hover:bg-soft-blue/80 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                        >
                            Add User
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden max-w-6xl mx-auto my-4 sm:my-8 border-2 sm:border-4 border-white animate-fade-in">
            {/* Left Side - Form (60%) */}
            <div className="w-full lg:w-3/5 p-4 sm:p-6 lg:p-12 bg-white relative z-10">
                <ProgressIndicator currentStep={currentStep} totalSteps={steps.length} steps={steps} />
                {renderStepContent()}
            </div>

            {/* Right Side - Illustration (40%) - Mobile: top, scaled down */}
            <div className="lg:hidden w-full bg-cream-bg relative flex items-center justify-center overflow-hidden p-4 sm:p-6">
                <div className="relative z-10 flex items-center justify-center">
                    {currentStep === 0 ? (
                        <div className="relative animate-scale-in">
                            <img
                                src={elephantImg}
                                alt="Elephant with paintbrush"
                                className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-xl animate-bob"
                            />
                        </div>
                    ) : (
                        <div className="relative animate-scale-in">
                            <img
                                src={monkeyImg}
                                alt="Monkey reading book"
                                className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-xl animate-bob"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Right Side - Illustration (40%) - Desktop */}
            <div className="hidden lg:flex w-2/5 bg-cream-bg relative items-center justify-center overflow-hidden p-8">
                {/* Decorative Bubbles */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-light-purple rounded-full opacity-50 animate-bounce delay-100"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-mint-green rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute top-1/2 right-5 w-12 h-12 bg-peach rounded-full opacity-60 animate-bounce"></div>

                <div className="relative z-10 flex flex-col items-center space-y-8">
                    {currentStep === 0 ? (
                        <div className="relative animate-scale-in">
                            <img
                                src={elephantImg}
                                alt="Elephant with paintbrush"
                                className="w-48 h-48 object-contain drop-shadow-xl animate-bob hover:scale-110 hover:rotate-2 transition-transform duration-500"
                            />
                        </div>
                    ) : (
                        <div className="relative animate-scale-in">
                            <img
                                src={monkeyImg}
                                alt="Monkey reading book"
                                className="w-48 h-48 object-contain drop-shadow-xl animate-bob hover:scale-110 hover:-rotate-2 transition-transform duration-500"
                            />
                        </div>
                    )}
                </div>
            </div>
        </form>
    );
};

export default AddUserForm;
