import featImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Hawaii Tower Tech "
      />

      <h1>{title}</h1>
      <p>
        This is a fictitious company and conference created by{" "}
        <a
          href="#"
          
        >
          Hawaii Tower Group or
        </a>
        ,  Hawaii Tower Tech is a leading Development & Design expert company providing superior Software, Web, Mobile and Creative Designing solutions and services to companies globally. </p>
        
        <p>Having a strong Technology Development and Innovation center in US and with more than 250+ satisfied clients worldwide, raging from startups - fortune 500 companies across diverse industries, BT has made it’s mark as a well established and sound company driven by the industry’s highly professional and trained individuals and is surely headed in becoming a leading organization which facilitates, enhances and provides measurable business value to customers through most effective uses of technology and Resources to organizations globally.


      </p>



    </div>
  );
}
