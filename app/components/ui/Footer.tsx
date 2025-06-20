import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-[#003B6F] text-white py-8">
  <div className="bg-[#EBF1F7] text-[#001F61] py-12 flex flex-col items-center justify-center">
    <p className="mb-4 text-base md:text-lg">We'd love to hear what you think!</p>
    <button className="border border-[#001F61] px-6 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition duration-200">
      Give feedback
    </button>
  </div>

  <div className="container mx-auto px-4 mt-8">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-2 gap-x-4 text-sm mb-8">
      <div className="space-y-2">
        <a href="#" className="block hover:underline">All Departments</a>
        <a href="#" className="block hover:underline">Store Directory</a>
        <a href="#" className="block hover:underline">Careers</a>
        <a href="#" className="block hover:underline">Our Company</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Sell on Walmart.com</a>
        <a href="#" className="block hover:underline">Help</a>
        <a href="#" className="block hover:underline">Product Recalls</a>
        <a href="#" className="block hover:underline">Accessibility</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Tax Exempt Program</a>
        <a href="#" className="block hover:underline">Get the Walmart App</a>
        <a href="#" className="block hover:underline">Safety Data Sheet</a>
        <a href="#" className="block hover:underline">Terms of Use</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Privacy Notice</a>
        <a href="#" className="block hover:underline">California Supply Chain Act</a>
        <a href="#" className="block hover:underline  items-center">
           Your Privacy Choices
        </a>
        <a href="#" className="block hover:underline">Pharmacy</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:underline">Notice at Collection</a>
        <a href="#" className="block hover:underline">AdChoices</a>
        <a href="#" className="block hover:underline">Consumer Health Data Privacy Notices</a>
        <a href="#" className="block hover:underline">Walmart Business</a>
      </div>
      <div className="space-y-2">
        <a href="#" className="block hover:underline">#WYWK</a>
        <a href="#" className="block hover:underline">Delete Account</a>
      </div>
    </div>

    <div className="text-center text-xs text-gray-300 border-t border-gray-700 pt-4 mt-4">
      <p>&copy; 2025 Wal-i. The trademarks Walmart and the Walmart Spark Design are registered with the US Patent and Trademark Office. All Rights Reserved.</p>
    </div>
  </div>
</footer>
    </div>
  )
}
