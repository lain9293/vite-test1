import "./Card.css";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Card = ({ id, title, subtitle, children }: CardProps) => {
  return (
    <article id={id} className="card">
      <h2
        id={`${id}-card-heading`}
        data-testid={`${id}-card-heading`}
        className="card__heading"
      >
        {title}
      </h2>
      <p id={`${id}-card-subheading`} className="card__subheading">
        {subtitle}
      </p>
      <div id={`${id}-card-content`} className="card__content">
        {children}
      </div>
    </article>
  );
};

export default Card;
