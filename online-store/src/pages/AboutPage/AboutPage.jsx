import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import shopLogo from "../../assets/shop-logo.png";
import shopkeep from "../../assets/shopkeep.jpg";
import shopStock from "../../assets/shop-stock.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="about-page">
        <h1>About The Superstore!</h1>
        <Figure id="logo-figure">
          <Figure.Image width={256} height={256} src={shopLogo}></Figure.Image>
          <Figure.Caption id="logo-caption">
            Here at Saunders' Superstore, we pride ourselves in our ability to
            source only the finest and freshest ingredients to distrubute to our
            happy customers. Founded in 1806, we've always made sure to be as
            friendly to the environment as we can!
          </Figure.Caption>
        </Figure>
        <Figure id="images-figure">
          <div id="shop-images">
            <Figure.Image className="shop-image" src={shopkeep} />
            <Figure.Image className="shop-image" src={shopStock} />
          </div>
          <Figure.Caption id="images-caption">
            Here are some images of the lovely, friendly staff you can expect to
            meet at the store, as well as our bountiful and fresh stock, which
            you're sure to enjoy!
          </Figure.Caption>
        </Figure>
        <div id="contact-form">
          <h2>Want to get in touch?</h2>
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>What can we help you with?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button id="about-submit">Submit form</Button>
        </div>
      </div>
    </div>
  );
}
