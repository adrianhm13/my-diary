import Masonry from "react-masonry-css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

import "./Home.css";

const breakpointColumnsObj = {
  default: 4,
  1600: 3,
  1300: 2,
  825: 1,
};

export default function EntriesList({ entries }) {
  return (
    <Container fluid className="entries-list">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {entries.map((entry) => (
          <Card key="entry.id" className="grid-item" style={{ width: "18rem" }}>
            <Card.Body>
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
      {/* <Row data-masonry='{"percentPosition": true"}'>
        {entries.map((entry) => (
          <Col key={entry.id}>
            <Card className="grid-item" style={{ width: "21rem" }}>
              <Card.Body>
                <Card.Title>{entry.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {entry.date}
                </Card.Subtitle>
                <Card.Text>{entry.content}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
}
