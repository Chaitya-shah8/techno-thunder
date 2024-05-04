import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Crop Price Reference Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Crop Name</th>
                      <th>Country</th>
                      <th>Soil Type</th>
                      <th className="text-center">Price per Quintal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Apple</td>
                      <td>Niger</td>
                      <td>Red</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Black Gram</td>
                      <td>Curaçao</td>
                      <td>Arial</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Rice</td>
                      <td>Netherlands</td>
                      <td>Silty Clay</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Chick Pea</td>
                      <td>Korea, South</td>
                      <td>Chalky Soil</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Cotton</td>
                      <td>Malawi</td>
                      <td>Peaty Soil</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Pomegranate</td>
                      <td>Chile</td>
                      <td>Silty Soil</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Maize</td>
                      <td>Portugal</td>
                      <td>Sandy Soil</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
