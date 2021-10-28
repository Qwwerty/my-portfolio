import {Card as CardBoot, Button, Row, Col} from 'react-bootstrap'
import {ReactElement} from "react";

interface CardProps {
  title: string;
  children: ReactElement;
  src: string;
  href: string;
}

export function Card({title, children, src, href}: CardProps) {
  return (
    <>
      <CardBoot style={{width: '18rem', height: '23.3rem', background: '#1B222C'}}>
        <CardBoot.Body>
          <CardBoot.Img variant="top" src={src} style={{ width: '100%', height: "10rem", objectFit: 'fill' }} />
          <CardBoot.Title style={{marginTop: '1rem'}}>{title}</CardBoot.Title>
          <CardBoot.Text style={{ height: '5rem', overflow: 'hidden' }}>
            {children}
          </CardBoot.Text>
          <Button
            as="a"
            href={href}
            target="_blank"
            style={{background: 'var(--green-200)', border: 0, float: 'right'}}
          >
            Acessar
          </Button>
        </CardBoot.Body>
      </CardBoot>
    </>
  )
}