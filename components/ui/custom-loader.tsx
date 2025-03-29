"use client"

export function CustomLoader({ color = "text-primary" }: { color?: string }) {
  return (
    <div className={`inline-block relative w-20 h-20 ${color}`}>
      <style jsx>{`
        .custom-loader,
        .custom-loader div,
        .custom-loader div:after {
          box-sizing: border-box;
        }
        .custom-loader div {
          animation: custom-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          transform-origin: 40px 40px;
        }
        .custom-loader div:after {
          content: " ";
          display: block;
          position: absolute;
          width: 7.2px;
          height: 7.2px;
          border-radius: 50%;
          background: currentColor;
          margin: -3.6px 0 0 -3.6px;
        }
        .custom-loader div:nth-child(1) {
          animation-delay: -0.036s;
        }
        .custom-loader div:nth-child(1):after {
          top: 62.62742px;
          left: 62.62742px;
        }
        .custom-loader div:nth-child(2) {
          animation-delay: -0.072s;
        }
        .custom-loader div:nth-child(2):after {
          top: 67.71281px;
          left: 56px;
        }
        .custom-loader div:nth-child(3) {
          animation-delay: -0.108s;
        }
        .custom-loader div:nth-child(3):after {
          top: 70.90963px;
          left: 48.28221px;
        }
        .custom-loader div:nth-child(4) {
          animation-delay: -0.144s;
        }
        .custom-loader div:nth-child(4):after {
          top: 72px;
          left: 40px;
        }
        .custom-loader div:nth-child(5) {
          animation-delay: -0.18s;
        }
        .custom-loader div:nth-child(5):after {
          top: 70.90963px;
          left: 31.71779px;
        }
        .custom-loader div:nth-child(6) {
          animation-delay: -0.216s;
        }
        .custom-loader div:nth-child(6):after {
          top: 67.71281px;
          left: 24px;
        }
        .custom-loader div:nth-child(7) {
          animation-delay: -0.252s;
        }
        .custom-loader div:nth-child(7):after {
          top: 62.62742px;
          left: 17.37258px;
        }
        .custom-loader div:nth-child(8) {
          animation-delay: -0.288s;
        }
        .custom-loader div:nth-child(8):after {
          top: 56px;
          left: 12.28719px;
        }
        @keyframes custom-loader {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="custom-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

