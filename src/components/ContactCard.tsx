'use client';
import { Contact } from '@/lib/validationSchemas';
import Link from 'next/link';
import { Card, Image } from 'react-bootstrap';

const ContactCard = ({ id, firstName, lastName, address, description, image }: Contact) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={image} width={75} alt={`${firstName} ${lastName}`} />
      <Card.Title>{firstName} {lastName}</Card.Title>
      <Card.Subtitle>{address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default ContactCard;