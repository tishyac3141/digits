import { Col, Container, Image, Row } from 'react-bootstrap';
import { Calendar2CheckFill, FileEarmarkTextFill, PeopleFill } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
   <main>
    <Container id="landing-page" fluid className="py-3">
      <Container>
        <Row className="text-center">
          <Col>
            <PeopleFill size={100} />
            <h1>Multiple Users</h1>
            <h6>
              This address book enables any number of users to register and save their business contacts.
              You can only see the contacts you have created.
            </h6>
          </Col>
          <Col>
            <FileEarmarkTextFill size={100} />
            <h1>Contact Details</h1>
            <h6>
              For each contact, you can save their name, address, and phone number.
            </h6>
          </Col>
          <Col>
            <Calendar2CheckFill size={100} />
            <h1>Timestamped Notes</h1>
            <h6>
              Each time you make contact with a contact, you can write a note that summarizes the
              conversation. This note is saved along with a timestamp with the contact.
            </h6>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
