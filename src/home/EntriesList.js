import { useFirestore } from "../hooks/useFirestore.js";

import Masonry from "react-masonry-css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

//Styles
import "./Home.css";

const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  1300: 2,
  825: 1,
};

export default function EntriesList({ entries }) {
  const { deleteDocument } = useFirestore("entries");

  return (
    <Container fluid className="entries-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {entries.map((entry) => (
          <Card key="entry.id" className="grid-item">
            <Card.Body>
              <div className="icons-container">
                <i className="fas fa-edit"></i>
                <i
                  className="far fa-minus-square"
                  onClick={() => deleteDocument(entry.id)}
                ></i>
              </div>
              <Card.Title>{entry.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {entry.date}
              </Card.Subtitle>
              <Card.Text>{entry.content}</Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Masonry>
    </Container>
  );
}
