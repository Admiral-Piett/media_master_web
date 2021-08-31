import React from "react";
// import AppRouter from "../routers/AppRouter";

export class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    // var raw = "";

    var requestOptions = {
      method: "GET",
      headers: {'Content-Type':'application/json'},
      // body: raw,
      redirect: "follow",
      // mode: 'no-cors',
    };

    fetch("http://localhost:9000/api/artists", requestOptions)
      .then(
          (response) =>
              response.text()
      )
      .then((result) => console.log(result))
      .catch(
          (error) => console.log("error", error)
      );
  }

  // componentDidMount() {
  //   var requestOptions = {
  //     method: 'GET',
  //     // body: '',
  //     redirect: 'follow'
  //   };
  //   fetch("http://localhost:9000/api/artists", requestOptions)
  //     .then((res) => res.json())
  //     .then(
  //       // Handle success state callback
  //       (result) => {
  //         this.setState(
  //           {
  //             isLoaded: true,
  //             items: result.items,
  //           },
  //           //  Handle error state callback
  //           (error) => {
  //             this.setState({
  //               isLoaded: true,
  //               error,
  //             });
  //           }
  //         );
  //       }
  //     );
  // }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <p>List</p>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    }
  }
}

export default DashboardPage;
