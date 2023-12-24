import AddWebsiteForm from "@/Components/iframe/AddWebsiteForm/AddWebsiteForm";

export default function Iframe() {
  return (
    <div className="container">
      <div className="text-xl font-bold text-center mb-5">
        this is i frame page
      </div>

      {/* <iframe
        src="https://www.javatpoint.com/"
        className="w-[40vw] h-[70vh]"
      ></iframe> */}

      <AddWebsiteForm />
    </div>
  );
}
