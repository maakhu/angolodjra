const Footer = () => {
  return (<footer className="bg-slate-900 py-16 text-slate-200">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-white">angolodj ra</h2>
        <p className="my-5 text-slate-300">
          Bálint Lovász <br />
          Private English Coach <br />
        </p>
        <p className="text-sm text-slate-400">© Angolodj ra. All rights reserved.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-semibold text-white">Social Media</h4>
        <p className="mt-5 text-slate-300">Facebook</p>
        <p className="mt-5 text-slate-300">Instagram</p>
        <p className="mt-5 text-slate-300">YouTube</p>
        <p className="mt-5 text-slate-300">TikTok</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-semibold text-white">Quick Links</h4>
        <a className="mt-5 block text-slate-300 transition hover:text-amber-300" href="#home">Home</a>
        <a className="mt-5 block text-slate-300 transition hover:text-amber-300" href="#benefits">Method</a>
        <a className="mt-5 block text-slate-300 transition hover:text-amber-300" href="#testimonials">Results</a>
        <a className="mt-5 block text-slate-300 transition hover:text-amber-300" href="#contact">Contact</a>
      </div>
    </div>

  </footer>)
}

export default Footer