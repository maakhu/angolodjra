const Footer = () => {
  return (<footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <h1 className="text-xl">@ngolódjrá</h1>
        <p className="my-5">
          Bálint Lovász <br />
          Private English Teacher <br />
        </p>
        <p>© Angolódj rá! All Rights Reserved.</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Social Media</h4>
        <p className="mt-5">Facebook</p>
        <p className="mt-5">Instagram</p>
        <p className="mt-5">YouTube</p>
        <p className="mt-5">TikTok</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="mt-5">Home</p>
        <p className="mt-5">Benefits</p>
        <p className="mt-5">Contact</p>
        <p className="mt-5">Calendar</p>
      </div>
    </div>

  </footer>)
}

export default Footer