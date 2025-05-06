import "./Info.css";
import InfoContents from "./InfoComponents/InfoContents";
import statistics from "../Images/statistics.png";
import settings from "../Images/settings.png";
import LinkButton from "./HeaderComponents/NavbarComponents/LinkButton";

const Info = () => {
  const LinkBtn = <LinkButton content="sign up" />;

  return (
    <>
      <div className="info-upper-contents">
        <InfoContents
          title="learn more about us"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus fugiat animi sunt possimus explicabo quisquam illum mollitia sapiente expedita ipsum necessitatibus autem dolorem ullam similique unde, suscipit cupiditate impedit. Non molestiae eos in, quas nobis recusandae neque earum magni repellendus iste reiciendis aspernatur vel cum"
          linkBtn={LinkBtn}
        />

        <img src={statistics} alt="Statistics image" />
      </div>

      <div className="info-lower-contents">
        <img src={settings} alt="Settings image" />

        <InfoContents
          title="how it works"
          description="ipsam alias deleniti quos accusamus commodi nemo quo autem sequi, excepturi tempore. Ullam perspiciatis, minus nisi molestiae rem libero quasi reiciendis eveniet modi nesciunt illum. Vitae iusto consequuntur labore perspiciatis voluptates aliquam at aperiam hic expedita quasi inventore minima, consequatur itaque, iste obcaecati quo consectetur maiores explicabo accusamus ullam error sapiente? Saepe voluptatem dolores odio."
        />
      </div>
    </>
  );
};

export default Info;
