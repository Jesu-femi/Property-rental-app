function ContactForm({ className = "" }) {
	return (
		<div className={`w-full min-h-68.75 rounded-br-[40px] bg-white px-7 py-8 sm:px-10 sm:py-9 md:min-h-68.75 md:px-8 lg:px-11 ${className}`}>
			<h2 className="font-serif text-3xl leading-tight text-gray-900">
				We’d love to hear from you
			</h2>

			<form className="mt-6">
				{/* NAME + EMAIL */}

				<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
					/>

					<input
						type="email"
						placeholder="Email"
						className="w-full border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
					/>
				</div>

				{/* MESSAGE */}

				<textarea
					rows="2"
					placeholder="Message"
					className="mt-5 w-full resize-none border-b border-gray-400 pb-2 text-xs outline-none placeholder:text-gray-500"
				/>

				{/* TERMS */}

				<label className="mt-3 flex items-center gap-2 text-[10px] text-gray-600">
					<input type="checkbox" className="h-3 w-3" />
					I accept the Terms and conditions
				</label>

				{/* SEND */}

				<button
					type="submit"
					className="mt-4 rounded-md bg-[#606b75] px-7 py-2.5 text-[10px] font-medium text-white transition hover:bg-[#4f5962]">
					SEND
				</button>
			</form>
		</div>
	);
}

export default ContactForm;