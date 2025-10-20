"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

export default function SuggestTraitModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    traitName: "",
    category: "",
    description: "",
    imageUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzFrLZyTmLgAR1ELbElQlHMmJ_d86WShBvlafRXiY40ymokyv2ZI3naAJ_vXCa0H-Wb/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✨ Thanks for adding your artistic spark!");
        setFormData({ traitName: "", category: "", description: "", imageUrl: "" });
        onClose();
      } else throw new Error("Failed to send");
    } catch (err) {
      toast.error("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal container */}
          <motion.div
            className="relative bg-gradient-to-br from-[#121126] to-[#0b0b1a] border border-purple-500/30 shadow-[0_0_40px_rgba(147,51,234,0.2)] rounded-3xl w-[90%] max-w-lg p-6 text-white overflow-y-auto max-h-[90vh] md:max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-purple-300 hover:text-purple-400 transition"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-center">Suggest a New Trait</h2>
            <p className="text-center text-sm text-gray-400 mb-6">
              Contribute your creative touch to the Canvas collection.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Trait Name</label>
                <input
                  type="text"
                  name="traitName"
                  required
                  value={formData.traitName}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#1a1a2f] border border-purple-700/40 px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Trait Category</label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#1a1a2f] border border-purple-700/40 px-4 py-2 outline-none focus:border-purple-500"
                >
                  <option value="">Select a category</option>
                  <option>Background</option>
                  <option>Base</option>
                  <option>Hair</option>
                  <option>Accessory</option>
                  <option>Expression</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Short Description / Concept</label>
                <textarea
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#1a1a2f] border border-purple-700/40 px-4 py-2 outline-none focus:border-purple-500"
                  rows={3}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Optional Image URL</label>
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-xl bg-[#1a1a2f] border border-purple-700/40 px-4 py-2 outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90 transition"
              >
                {isSubmitting ? "Sending..." : "Submit Suggestion"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
