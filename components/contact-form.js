// "use client";

// import { useState } from "react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { motion } from "framer-motion";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export function ContactForm() {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const { fullName, email, message } = formData;
//     if (!fullName || !email || !message) {
//       toast.error("Please fill in all required fields.");
//       return false;
//     }
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     try {
//       const response = await fetch("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         toast.success("Your message has been sent successfully!");
//         setFormData({
//           fullName: "",
//           email: "",
//           phoneNumber: "",
//           message: "",
//         });
//       } else {
//         toast.error("Failed to send your message. Please try again.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again later.");
//       console.error("Error submitting the form:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12"
//     >
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center">
//           Contact Us
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <Input
//             name="fullName"
//             placeholder="Full Name"
//             required
//             className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full"
//             value={formData.fullName}
//             onChange={handleChange}
//           />
//           <Input
//             name="email"
//             type="email"
//             placeholder="Email"
//             required
//             className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <Input
//           name="phoneNumber"
//           type="tel"
//           placeholder="Phone Number"
//           className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//         />
//         <Textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           className="bg-gray-100 border border-gray-300 rounded-lg p-3 w-full min-h-[120px]"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <Button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-3"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? "Sending..." : "Submit"}
//         </Button>
//       </form>
//     </motion.div>
//   );
// }