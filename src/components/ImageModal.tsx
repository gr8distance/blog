interface ImageModalProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-contain" />
        <button
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

