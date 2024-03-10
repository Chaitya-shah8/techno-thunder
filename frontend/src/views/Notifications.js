import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import axios from "axios";
import { toast } from "react-toastify";

function Notifications() {
  const notificationAlertRef = React.useRef(null);
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  return (
    <>
      <div className="content">
        <div className="react-notification-alert-container">
          <NotificationAlert ref={notificationAlertRef} />
        </div>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">ML Notifications</CardTitle>
              </CardHeader>
              <CardBody>
                {/* <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <UncontrolledAlert color="info">
                  <span>This is a notification with close button.</span>
                </UncontrolledAlert>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </UncontrolledAlert> */}
                <h2>Locust Data</h2>
                <UncontrolledAlert className="alert-with-icon" color="danger">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </UncontrolledAlert>
                <h2>Fruit Quality Data</h2>
                <UncontrolledAlert className="alert-with-icon" color="info">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </UncontrolledAlert>
                <h2>Plant Diseases Data</h2>
                <UncontrolledAlert className="alert-with-icon" color="warning">
                  <span className="tim-icons icon-bell-55" data-notify="icon" />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Index</CardTitle>
              </CardHeader>
              <CardBody>
                <UncontrolledAlert color="primary">
                  <span>
                    <b>Primary Alert - </b>
                    This is a primary notification
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="info">
                  <span>
                    <b>Info Alert - </b>
                    This is an informational notification
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="success">
                  <span>
                    <b>Success Alert - </b>
                    This is a success notification
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="warning">
                  <span>
                    <b>Warning Alert - </b>
                    This is a caution notification
                  </span>
                </UncontrolledAlert>
                <UncontrolledAlert color="danger">
                  <span>
                    <b>Danger - </b>
                    This is a hazard notification
                  </span>
                </UncontrolledAlert>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
