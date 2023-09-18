import React from "react";
import { useState } from "react";
import "./AddProject.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProject() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [githubLink, setGithub] = useState("");
  const [siteLink, setSite] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImageurl] = useState("");
  const [loading, setLoading] = useState(false);

  
  const Loader = () => {
    return (
      <div
        class="spinner-border text-warning spinner-border-sm"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  };

  const handleSendClick = () => {
    toast.success("Project added successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };
  const submitRegHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const response = await fetch("http://localhost:8000/projects", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        name: name,
        githubLink: githubLink,
        siteLink: siteLink,
        description: description,
        image: image,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
       
      },
    });
    const result = await response.json();
    console.log(result);
    setTitle("");
    setName("");
    setGithub("");
    setSite("");
    setDescription("");
    setImageurl("");
    handleSendClick();
    setLoading(false)
  };

  return (
    <div className="container" id="projectSection">
      <div class="row">
        <div class="col-lg-8 md-4" id="formWrapBox">
          <h4>Add Project</h4>
          <form onSubmit={submitRegHandler}>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label">
              
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label">
           
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="row">
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3" id="ProjectInput">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                  ></label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Github link"
                    value={githubLink}
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3" id="ProjectInput">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label"
                  ></label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Web link"
                    value={siteLink}
                    onChange={(e) => setSite(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Upload image"
                value={image}
                onChange={(e) => setImageurl(e.target.value)}
              />
            </div>
            <div class="mb-3" id="ProjectInput">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div id="projectBtn">
              {!loading && <span></span>}

              <button type="submit">{loading && <Loader />}Add Project</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 md-4" id="imageWrap">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhIWFhUXFRcYFxgVGBsdHRgWFxcYFxkXGBoYHyggGBslHRYVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGxAQGy0mICUtLS0tLSstLS0wLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLS0vLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQECAwAGB//EAEYQAAIBAgQDBQMIBwUIAwAAAAECAwARBBIhMQVBURMiYXGBBjKRFCNCUmKhsdEzcoKSosHwQ1Nj4fEHFSQ0g7KzwnST4v/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAA5EQABAwIDBQcDAwMDBQAAAAABAAIRAyESMUEEIlFhcYGRobHB0fATMuEFQmIUkvEjQ1IzgqKywv/aAAwDAQACEQMRAD8A+K1wqRU0xQurqipqVCiptXVeuXKLV1q4VcCiUKtqtapCGriE10LlnarWrUYc1cYaihRBWFdatmw5qhQiuhQVW1TarAVNqmEKgCrAVAFWqVC4CpFQKkVKEq4qRUCpFchVhUioFWFchlSKuKqKsK5QuqwqBVhXKF1WqtWqFCmoqaiuUKa6oqahcuqarXVyiF5wVNRWkdJJhaQEqoFXEZrZUrZVqMQRikShlhrRcPRCitLiixIxR4rBYK1WGr9qK7tqOSuwsGZUiGrrFWXbGrqHOwNEGkoTVpCwWoQVbSoTBuaPPA5FXM4Kre1yOemnnqKPCuDyftafJAFhVHK0/TgChXbOCFC630uxAFzbbXlRfCeFQuWVlKvkcryuQpIN25aUYYkPq7pcYAGfLI90G5XjmgJ91SfIGrLw+U7Rt8K9thJisSPIAFVgLqdS5uRy6A8+VTL2qsJpLNE8lsqkhtRf+VEKclV6tVrAW/ukgZQSNAQfu1i2ea8R8ik/u2+FYtEw3Vh5g1758dNmd1QGBe+VhPeUAWMhG+a25F61ixfdtEvbp2Wl8rSxNvmyKveC+F81T9JvFZr/ANQqNzYNMn2HJxiAeRz0JXzq9SK+hyRxCGPESRxTxuSC2RQUb6Oo3uTbLah8D7LrOFLQrlY2L4c5HToWVtCK76J0KE/qzGtLntsCRIIzGYvhMjgQDla68OKsK9LjvYqZGYB0Pesgfu9rzAQ7F7ctNjSDFYWSJzHKhRxuH6HY+I8RSyxwzVujtdCv/wBN4OvZ0+Rkb2WYqRXAVYCohOXCrioAqyoTXQoK4VYVPYnpUEVEFRK6pqtWqFymorq6uUK1RXVFQuXV1dXVC5eeca2qtFzwnOfOpXB33NKWlgdiIAWMc1ahzRuH4cp/1ouThWUZrXFA3ADBVn6G0FsjJKVUmto8Kx5GjFlUdPSp+WjkKstaNAqzmtH3vVE4eedhWy4JRuaiN5G2FqKTh5PvMfSjFlzWMddrSeZ/KxUIvSmWEwsjgFIiQTZbkDMfDMRf0orCcJSMgst3tm11Ea/WYc26CjMK/auyqPdQuxJucoIHxuwpLqzdDYa/PNalLYagbLxBOQGnWfKO0LbCYaOM2c5WAa7Ed0SgXEVzoptzPMihcCzk9lKxaLPnDXBNyLEkXN9NwdNK7C4tLlX7yN1Nip6g66+hvfas58KkC3QMylx3ibgC2i9QTqdRy0qIh0m4Py/BNc8ub9NsNcDIzF4/abgniDeeRK3iw2RZYULusgKjS9+9mVlUag90aUPg2yZoJnDC1iV3W/NSfpD8xtTJYLRJOpPvG+oFiFVlA1vckk35BDVJ8EHQPKLGZnCsq97PlZ8xJ3Aa178iacXQTwAv6LOa4Flxd7oaW/djFiYjOAIuCMNhhyGdSIjDIAUYgpIvJ10Fidmyk6cxfpQzTSRFUkbMhHcYXtpa4I5EaaeVE8NSSWGaJLsMjMA3Jk7ysD9E/mRzrDhmMjkiMExAuyuGO4I0vffVWYUzFAkcO/l1VBzIe4OiA8B0aB8D6nKALgWIbbOxHGQUwyTRPl7zRuEuSwYa+C6XHjr0obg0cZRnX5iSKJpA8ZIsYwD312dNNdNudVbE/JmySEvAxsGAurre+U+Ol7HWqcLliDB4ma4118zp4i1hrvRNfLvkj1uqNbYx/R1GTvA2eCCHgl0NtnA0MtA/tRfs0TiBI0kQdWd5TEo7gO5ypyPiNb0Rw3i5QTQQdq6F+4VsZotB3cp1Yqbr+zSzGWwsgdD8xKdAP7KS3fj+yBuPDTkaIxHE0eF2QO8i2eJkUse0zi6XA90jNceAPKmAwOiy61APJexssdEC8MIP7hq5uRuLSTiBC9Hgcc85dhIJo9RJCUyTRFRYuneNpB9Xun1pfGsPEYfnHtNh5Wjziwd4wbByD1uGy9QaAwXG4HftHTLOLZmQlJc6i3e5NoNnU0RjTDHIcS0MbwzOLuilZI5W1sxDaXsSGXQm+g5lMjksz+nqUqsQ5rrYSA3MWIEQDImDukxkTCQ8a4JJh2AYhkb3XQGxtyIPuP8AZoBIK+n5opU7Oa7xyZESTmCR3BJ9SUHZ9jp5V899osBLhZmjNyBqrW95DsfPkaBzQLrU/Tf1F20f6VSzx2SPcajt4gVjwPWtU4YdwaWYTi7BrsLj4UzwfHEZjm0FQ0sKuVhtDchKokcoaxTTrUHEJmysNfKnOCxyvfKdB1reKONzfKp8aMhU3bUWkio2OhjzSJ8KhO9qzfh3Q06xXCo5GDXItWWO4W5I7JgBzoCwcETNsbYYo6iySPhGHKsWUjcU74lFJEBZc/WszcJndLUs01ZZtOJodYyk9TRweJ9bgUNLGvI0stT21JsQQsa6oqaFMS7HtaQ1ks52FM+KYAsc6DTpSsoBQtuFpVw5jzzlXDMT/nTjhvFPoSfH86WYS970WkIJqXUw8XQ0NoqUXYmnv1TqT2eEvejI16bGsouGqhs+hHKr8CndJABfLz6V3tJIxl1PL8KCm2oDhJt4q/VfsxpfWayHTcaKJsQo0UUx4RhzlEzAHMSIw3ujL70rfZXX4GvPjDkkBR3mIt4nYD769p7QhYIOxsSRDEQ490KDIHUnfVgNBvlN9qXtb8AawZny180f6aTUqGo/JuQ5n2QmPuJzDGucp35CwvmOl2Yc9SFAHUVESIjSund3VgD7oYEZAL3K38TbTpQAc4KZc5vImUvcnKbC+S31Qdj1APhS3h2ecuznJGh+cI3YnUInUn7hrVdh3d7K0cytJz5qW+7heIzM38dLp0YUVT2a/OuoZmzXCJsALkkMxvp0HnRuIVEgS6gsIg/e1AvIUBA5sw5nYL40rxkxSLOkfzaEDoB4X5n76J4lOjxKyAKZWuUuSY0jACKb7XJLW8qsVGt+05uItwj0t05JNKo/Gx02Zjk8SZhvEQTPHdM5gK0kK/JZXUlSGTMB7rBtiAdjcDbkxppw6RXw8Ej6BGmiLE6KZIgEY+p+CmvPSy2geIjWUoFtrYIQzNbyFUw+Ex+DLGHLIgO6WZSOttQd/vqa5ZDqZMYhztp+O4wqlEV3FlRrcQpvdAsCQWYSBmTBc68TMA2hHezYlCYqN2MWhOa30Izmci3vX0FueasJDhMQqhfmyoAR209GZbgDzU26867gvtMpmVJoY4i942aOMRtllshLfRtsbEW36155Z7TMq2sCR3diVJGYDle17VIpvdUDqsERDcJIg3J4TPakP2xjG1aezhzHYsT2vax0zu/yENwgEHC7IiYTJcVNh37LEpoeoBWRT4aq6m2+oqOK4VYsuJw+kbkBlBvkk3t1CkC48iPo0VgsQjKYZQWiblzQn+0jv7rDew32NUwPA5Ak0faB0v2eW9iAXDLLd7IAQulzrnFudn1H4Gy89Dz4dvyCFk0aX1ax+m2/7mzulptiBJtgkG925EkOknYfERyRZWOjWa4NnVxsyHkdxqDoTVOJYyeJQ/avLGNDdmzp0J1sR9oW8qnG+yBEPzAZjYXKyRvrzGjA/ClOAXFwSqmVmv8ARcMLgb919x5XFOZVxCRI6iPAwVUrfpkOmm5lTMgBzXzoYIkjLQdRondocdHZiDKtsjFsj5R70faHTxAYEX6Xpbh80Ez4Sf5yKROf0o3Ojb6MpXroUoIYSRSZFR0Vmew7N7ZLnKQwFiLWqJccJXhV3F48/e6BsoyHx7u3L1qGVGvAcPweKCr+mPoE0v8AbImCLtMYgRB3YOg1JMkgQfwbHNE0kLd4J2iMCbXyX5j9UEMPCvXzhcXhRa7uozobaso0KsR3c+uvWynnXisXh40ZnjLkOLHORcuRY2sPX0pxwbiEeDKdlLJlY96ORgwuF3QqF327w6a05pIsfnDwWZt9B1XDWogh+eUCQN6RmJ7RoSLJQmFjlBuLW3v4VhJwAEXQ2FMeM8GZ5nkjLZJCZAB9o6ihJpJ0spWyrvbQmoIGoV+nUe9odTdnodOI6zZLpeESronxqoxE8S5Bn13pzDxwPIAwyIBu3M0zwc0cxJC93ketRgH7SoqbXUYP9anIz9l56H2iZEyFQW60xj9oIwgLXznlTGTgcV72F6UTeylyWLadK6HjJIFXYaue7r15JvBj1KBy4tS/ifHowCo1PhSGfhU2bKB3etHYHgViGY38DQ4nHRMGx7NTONzp4BKuxeQ3AsKYYfCMNCKfqqKtgBeojhBGu9d9NG7biR9sDRJfkx6V1MWhNdUYFI2hLuH4kMNDceO4863xfCFk1tlb8fzpAAY2uh2/qx616PF8RKrGW67jkDffrVJ7TitmvV0K7XUnCoJAi3XUHMJFJhmiazbcjTfgvD+1DMovl5el6avhe2jDaEHb1oPDY/5ExUDVtwb+WlFjJbuxKAbLTZVDnzg8eSGhxwzaDn+FZ8RlzuD4U3h4ZHiwWhNn5j86UNw8xsVfcUxlRskDNKrUKpDZ+05cD+eS9D7E4HtJ85taMhUvsZnByX8gCfhVuJ8PziOAsUWXFG7udXV3CBlvsDd22AudBY1biwEOEWFQBlWOdnzEfPSC4AK6lgo06aE8rjcV4TJicTA0zlTOe5CBrHEBe5OwOUXtasepVL6hqTAvHG1/WfW4Wzs9L6dIU8zreM/lvylXtRggMSULvIwcILm7GxChfPYUxx2DKOmDiW7INRf3pmGZzfnyUfq1nHJDHi4JygESurAaliFaxLXNywIvr0pLxPjdsW8oOnaMwPmSRVmi3faDkB4zHSwQbXUNJjy2MRytytORiYTtMQ64NDKPfkbskPIoMjSN1PIDlqaXsrsrOouFFzr1NvU1h7R8ajkTDJASyxwKG0IPaklnB9TvRfAeICNA8o+bWTMbNlcuFJQAjW1wCaKnXP0TVIOIzANjwaOWk9pKrmnjeKNGA0XcdOLnTkSeZ4ZALPGZmVSLrKwsEt7sa2y782NyfSqDGSxqsiSzRuPe1UIbXBAsbvqOlqE4bxlflBebZrg+BbY26Cg+MYt5JPnGW8arGAi7qosCB47k9TViajQCDmZJnXgLZEeAhU6h2aq51IskNbDWnIi8kzmQbkWMnoU8m4hDiyhl+ZlAIDxIAjE7F02B53FqScUhaCUAoyaC2Y3z6e+psLgm58KF+SSWzdm4jGpYC/q1thV+J8RMiRoTmEeax8Gtp91NdBubEdgPZ6qgxtSnutMsNiCZLYEjCTJA0g2iIi8t8NPexq3H+OO4ijNwsYt52N9etgwt0vS3hk4uAa24li0+VEsgst1IW4zZTYE2O5FrkWpjzIb17rFDS3ajjqGmOckAjtHMIjG8RJMOR3Btdh5Wt58/hTXBcRnExjfMyMoZA4uElsMji+1jY+IuOdYS8KjxDdrhZsOuZQOymdwUcaFU0IKncXPOhOF4WVmYK13VyGUsobMpsQBexNweetGWl267I9siFntq0C0lhAcyDvDCWmZByvERIOGNTK1w/GJDO5ZmOYZhqdzYn770JxrF9rkkNg97Zl2dbG2bqw0Gbex12FssKksM4nt9PPqLga3ykHodCDRPE1WaUSRx5A2YuqjKgbTvKt+7cHUDQWoGNIphgFvkQOC0dqa121uqPaQ83m1rGQTIOWViLcghZ5HORLjS7G52voD8A1b4gAlLNc2Ow033rsCIkcu87ISScoiYtl2AW4C7WFyQK3eFo3R7I8LGyhWV7KLnJLbUG1yeVE1wMj4O3LulKeBSIBgHS4uYkiOKcYKd4lVu1SRTtbMcunuG/PypqvF43Hfj9dxS1YopFGSHskuTluSt9s4B929tq1+T5R3fhViCsn+pwSwzJJs4N/8AmwPTzWs3DYZR3R8NarHw54+6q6eH5UdgY8sbuy94fletvZ/GOZAGN1sdx4dag2urLaVKo2m1x+82i8SY+QljEjc1Vpm3B9KPIEnaSL9A6j1NKcSbDOxC3bQVJWa6gWOAdrkc50y7ETiWYW03FCYrHRqVS92bkOVT8tV27NWzHJrbYUkm4GQWdH719+lA4nRFs1FhtUOH1nJNZzZ8lwWOtqJw4A0bTwrysXb4du0tnduuvrTHgyyG7Sk3Y3oQ+TEKzW2Uhn3CIzGp1toAvQZI+prqDy11GqP0v5FeNVDltenvFIj8mje2hA19B+dedRira38q9LwbiWUCGYXjbYnlWa6SQRovcUHMax7XWBi/CPnZmmns4VfCNBmyyBsykbjXMPSiGh+UDsplAkGzdfEGkfEsC+HcSxE5fwH5V6fg86YmPMNHXcDcHqP6+6lvZgBcOvzlxHFW6FYVHCk7KMPUDIdRm0j8Ly8mHmwcoIuOh5HwPjXosKkOOF27rgguOZUHW3mL0wxEYmtHMBmOgbk1vwNIP91vhsSlidWAB6ZtLN8aIPxNJGYB7PWJ7kL6RpVfpuu0m05H2dGR171vx3/iCsEdmLvmzD9GioTFay6kAIg8b8r6GYPG5+KDMoMgBEWUnLnAuRryKh112vS44/L8oIsmeK0f1ggdjpbVdSuvOs/ZrESLImOxDLtKkROheRY2Ga21r3W/Mmqb6eFh6EDjJv8AjpKtMqhzuJJk8IHyR1CS+1TdniJIgb5XYelzamXtJgI8HDBFYGZ4+0nJ3LNqF8ABpavOzuz4jtH1zSKTfndxRXtnxFpsVK5+sQB0A0Ap5Y7G1pyAvzOSrGthY+qMyYHT/C04RwVMWdyr5lUWt3ixsAAdL0XxLDyzwQYeOHK0F45FjAJL5j3rKbsbDU+FJeEzxhT2jMBclcov3spyX/atQuG4lJG2ZHKnqpII8iNRQ1aLn1Q5pAwi0gkYjiByItHKcjyQUNop06DhUGIvJmDBAAbE9skcZPKHUnslLEoeYLGCQB2zBWueiC7H4UFxTExxkxwMWXTNIRYyNbU9QoOwoTEcRd75iSTzOp+NFcJ4QJbFie8SAADyFze21OpUahcC90ngBhb1i5J4EmL5JZrtILKDInMzJjvgcyFXhXGpInDKx/PwNa8aRGlDRLlWVczIo0VwSDYD6HPwrVFjQMUS7KcpDA3v4Dl60RJCQ9z3H0GYE3Q2N1FiLag38Ca0GUjUbAM8PwefdzWWKIp1w8gtOR0kcCOXAwdLSULwvg7swy2tvcm2g1J18BXTHD3JIcNc3Nrhu9uOaeR6V6jgXDyEU52Ut82GcasWUsyrbvZC2/UHwpHjcKiIFZbyB7Fja522sdtqd9AgEZRfj6JFDbGPe7CMUgC4ymTIM6EQf/IRkLgRCzdzPfwFGcSwuVg6EiT3jqddbNe+xBI/erZYlRRbfcgWJ5WuL7a/cfXaCS6tm30ynU2zZl8yNtulTgw7pVlsNdv/AGmxm8SQJHQkZXi1xKlcQxN80SmRd5UbIzg2LXU6PvfTW9zrQuDKklcThjIbkZkIG31LcvxvTLh+BgLqk4aTITolgLta9yxUm2XUAeVNMJNDE7XxEyrI1lWOQqNBmKns2bLYW0H5VXN3EAE9Zw8tCJ5tF9TK5tPFSDX1MLRYQYIw8C0g5GcJkgRAw2SPFcOla8Lr80CDGJBmmRTY5L+8BYm99NqcP7OQ4aMdqxzMLrH9KxuAzfVXfxr0WE41lchgMptaRwZGBG2rG2uvKscXwuBnzPKxLaksRb8fuFQ0PDgHAN7SSbC2VryDMlT9IPoF+yA1BOhAA1mN2ATpAEzqvNuXy90a8qM4dwmZ+/KezUep/wAq9Jh8Cq/oo7D+8bQ/un/KssThQRmYlwNzfKo8z/Qq1YrHp0qjaeCAWznpPUXdH8ZH8glOL4nGiNHCpdjub+mtV4IxBaRlsAv5D8L1riMS1rQKp+1ay+hPvUumgmb9JItvq3Cj/OoIlS0tpPa937cgAI7wTYG/HmkOO460QyISCTc+N+VHLB26Z5GGYi5A3FbYzA3s3Z3I5gA/hSDDTMcRco6gdQRSiS03uCmNwV6YLBDmjlNtFZ+BlcxjZlblbpW3DnkVezdtm2tuPOm8Uwvdg2X7NZdmDcjlU4AMkg7Q5wiqOF7KUjFqgm1V2rHFYiw1B9KJLDXE8UV8sHSurzvyuce6txyNt66gxp39A3l3pZDITqRrejpTe1zcW5UKFtWsDNaxAH86pg5grfAiCF6f2dx4YCGUize4T1+qfv8A63tiMBJhJu1hvodU6jw/lXmFQhtNrgkeWunSvUYLj2Zss/uGwU819eYork/PnuiBaxhniIjhmZ1gG4i4NxwHpocVFiIxIuxtmHNG6+FFCMSBY5jc/Qfrbl5+FIsUowUiyizRyAh7bEb5vPXX/KnMWIC6EZsM1iJCRdD06nzqmQA7d8PL2nO7bkLUFR7qeF9+t51m2f8AKMrPAuvGcbQR9rmJuHKafRVcrLa245Hwt40sxLmf5Hhy1kIQZj/iOczelzXq/a/AhcSjN3lKdotv7TIQcreYv93WvHSzsymQgkRyAl7aZmJcKehuGNvGmCHN+Z5W8utlUfLSR3jlmZ7UDx5oxO/YBgitZMzEk5dmN+ZteqcUbM2f64DfHWt8fhwXzLqDqLdDrWDREouwABGvgTTAzDZVnEunndDw4ZmGgJJKhQNyxNgAOZo2bhzxuVeOzKdVJ1B6G1a4PKwc9qUWJQ65QbyS3FlBGq89fChMHj0UnPAkgN73LA68wwN7+NAHE1DGQ5HPOxyjv7CCExzGU6YJmTwjSR0NxxGSqMBIx921/gKaxZycsWZciEBkY5S/vMzHlpYC3QVIw8MqFoXdW5xysSLcyjjceDCpw6kRhWBIzAWNwADZc32uXoKvsozcd6rUK8OxMkGMjYjMX7RIItaZi6x4bFlLIWts1+ulyL9dK9DmDjUCzDUAe6q6Wu3M772t5UAmH7MnuqOneBt0IuDrai3VDYBgPA5e+OhDEm3lWpTpBjQPnihdRm7ndnrnHgmmF7MRqQ120CbW7pvlN+9kvoDfm3TXz3GSuYtoti23Mkm225/1pzhsOrPZXY5r3ymxyga2tppqQBoL3O1Y4+AFyVBQZuYIOW1rXt5eFLrPA3FNDYGsc54zPzyvzsbyEHw5C7AEZra2tr5g0yxOGVUkYMDlZLaEd4G4Gtr6mqcL4cQxa4yDXOABtr3m006k7W8aXe1HGUeIRQm4EjFnv77GI5QOeUBhbxJ8KruqbpOt1Nei4Oa1w3ZE2zIMxz4kies2I8cnedb2RY3csg71uwLd2+2rp02rThcAPyRddXkzed4Im169w0saUlsVlBOWJ1NuQvDH/wCpp7wTDTucMVPzS53ZCbEO8jnTTf3KE/dA0PrHhHcsHaXub/quIy46/TcfN1vNfREgSQZWFxz0sdR3bgb7bis8HwaNBeNDI4N+84WNT4sRceQpJwyaUSEWjMY2Z3PaiTXoMq89qdfKIxbtBmIsVB3ZwdWOyO1tRz0qKgfG75entCrUf1T/AG3kttoRBEDM3I43MTnimFnPjsU6kZURRvJIMsSjr3jmPral91Z1tmnkPuvJcQ/9KJe9Lb61sv2qI45iEBeGRxmz5kRyCWIsUVA6iNDsbkOaT4uMr/zLlLi/YwnPI4/xnbW2/vEL0U0llZjmh2hy52nSe3MxfS1jaG7W6thxExmSTaCRdzg2OIIwNyBmQSVxPEqbsLzle60pcRwKfqr9Zh6+dIzi1W57VP1Ylv8A9oP40bjQHCNPlhiVbRRKCxydIk0LE83Nh4igZsTf9HCgUc5GZnbxJUhV8gD5mmBxy+f55LQpmwc4nqSQD0DRiI/lF9STc8mOB2YHwLWb4SBT8DV/lYX37j9cXv8AvAj76FkkjI+cjK/q2kHw0YfA1nFhgf0En7KNb4xNr/DU4lJ3xcYu535HcmYZGGm32dB91xWDQKNQf3hcfFb0qljYH3UY+F42+K6fdVPlhX6UiH/EXOP307wqC7ilClSP226H0N+5NWzEaWNuaG9DZte9Q8ePZtbLJ4xMCR6aMPjVxxJds5U/VmF/+7KfvNQXhANmj7CD4H1HkiMgqajtF+r+7nt6d2uqcQS/oVeB8PdeXTQaVTtGZbEWI2NFQQC2+a3KPUDzc2QfE0TDIL2QDN0QZ2/fYZR+ypqmGHW3z5z5LbJnTL5dUweGlK3a1h9I2UfE70yiwiAXdsw8O6v777/sg1WPCSs4BsjnbNeSX0UXI9Aoo5+FxxHNiHCnrM4LekaEn95vSiLmgxrzUsY7DOQ5e+SJw/HGyiKNS+UWXKPdH676+tq1w7zybX05QqZGHnI3dX41RcXGFBjiuv157InopsD6BqLwPGpZi0KYzK5XQAZIjY+53hmcnQCwHOqW1FjWz7wO6ev+VpbEHk4Qfcx2A6cAEVLwdzFm3a2YBpGdiL3ZST3VNhfKBuBXh8T3kdQdA4bY8ww9a9phuJiVWjkXI40dTcFHGzC1mGtqTcZwUmUyhVIvlcJoBcls9vogkt1tr1FL2ascf039ntrPK/TMKztmy7gqsyiD7+/NeW4pJ2ZRIgVCxqGO+Zz3mbXbU2sOlLcTGM3M+J5mm+IZWFmsjgWsx6aAgnfYfCtWgDAMuoPTrzFXQyclkkAkzYpPhyR+qbAjrr+Ov3US3Dtd6vj0Crl2YkW8AOZ6V0eHlP8AaH0omsAMZoSCbBHYKEJlUau5CqPAmxYjpXo34aEnu7WWwY7HdSwsNgCLnU0p+TiI4cFQXuWbM2tjcDNfbQX16ivSSRKzFpDmBUdw7G6W2/rbxrY2VowEQlUgWVCToJymeXW4gAOkyl0mZrtkVQNO8CCN8qlgLXsp/wA6FxGKjQBWbtGILKsTG2UX/SEjw2+40H7Yz2jWNdF7rEDYtdwb9bWsKSHEASIxG6OthyzFgPvNDW2ssJY3SL9sZWHzJOLpYGkddPL3TWfjzBJkjUIpGRiNXYFT7zH+Vt6DmxsscMdppFuVI1YXUqLnQ7Ai3jelSPrJfc3t57fhUhSyqp2W9vXWsyoTUknO/n7JYqwL8uXlGqbS45+3ZWmkK5GBOdjmuhtoTbmNKFggzRKh0IkLX8MqqB/D99ZI2uu9FxUxuETzJ8Y9lXe5zgAm2FCKzPbvNqbc9fzpgmMc7Gw8KWYKPP8An/X9ammqYOwJZwo62/mdL1YaTCya7WB29c96iWJ79qjyDIhui27JuffuCBm62N99Ka8Hxk0kd5lMd7LZm1JJteJr312yNr4mqYGNlUtFJaNlZ88xDJmUjMoC94MQb63HhvWr4tQjTwSNObnOhZZQFRmGoIGZCRo6WtzpT6waYbcmek88zbO3aZIVZuwmsd8AAXEffAvAEgf3GeAsUxxK9pAwhAZ4VUoJlMl1Wwvlv3mPVQWBWxtSfieJxebtGnTMy58kUa3G4uzSqWD2F99KA4ljJMVpN3Yw+eNASSjHU2c6qNToOtYxzzopVMRIyE6xzfOLpta/eTzBvQClJxkXPrmLjKd6Dm7O91dok0g2m126BA1yuDbX9tohpsYgDTKLltSx3ZzmY/rMdzUZ6GfG85MOy+MLBlv4I1mA/aNVGLiJsJQD0kBjPxYZP4qIVGNEZdkfjxRnZnvJJ3uJBnzuVuddqjGY6B3ZOzutrKAgzB7WDCXNf3xc3vpcW51lionyGwNiD3hqP3luK8/wuGQSC50H36WqHPMiBIT6TMLHAkg9x1tlrIy4L0BaQe7KSPquA4+Ld4ehFZHEMPfi9Ymv/A+v8VWL1BeijgoFVx+6/X3z8UK4gc7qG6OOzb4nS/kxrpsK66Z2tyEgDg+Wb+RrSWx0IB86vHgAqqyPKucn9CuZRbQdopIAJ3AttQEO+WR4mWBkacR45d6WfJ2/uYf3nH3X0qaKxPbRsUPYG1tTmBNxfUaWOu1dQ34HwUjCcn/+3sse0iWxZmmPLOcifsrqzfsgb1omPlfuQxtb6sKFQfMJ32HiWFLw8K+6rSv1a6p8Ac7fFPKulxTsMpay/UQBU/dXfzNzVb6h08PnnKZDql4nm6R3D7p6fTniZJTBCdjLqT7mFtcnoWU2+LE+FG4bAMNcqQhd2l+clXS92JGWP1C+dKMBizGwINgdCF5g8rXAJ8Dp1vTOXEstswWAC1u278vmkNssfoij7VQXx8+eiJzA0jG4X7JPAMbd14kPLjGWqYRQxD5wq05/vJXsn77G3wMnlRWJwuKxKaiLD4dGurgCJARswkcZ281FqT4bGOTnjUlr2+UYshspOncBORDr7t2PhRrQB3HbvJiJrXCd42Gn0bgonixjt0NKqte8S0dpy5GBn2356q/sjg03meFrcothGsPIOkGAtu2fFnNH/wA1EMpIBPbi5toAFVQB7xPO9TguJ5gSO6wurA7o1rW/r/Kq4niQUGM2Nt4YCAoGotNLYKOhygHxa9KuId0rICglYgfJ44yAIwDqed/MDYnzp4G/YDby5Tw1HDLKAN1m0QCSOvPSRlfSBc90WkjzEXsH1Gi5Q17gqoubmx2HppahsTwplvYshPIEqD+dEYbiGzqfXmPA1tNxJmXLndDe+ZDrf7XJx4Gn/XqA3Hug/paLmm88Pwk6JEoJJu3Q+9fob/jRfDMCSgYOUFxzYAEnbTQaXPoaCxfF3UlbKeWYqAT4grYUZD7Um1uyAAva2tr2tYHcafeavUKjSRjIA7fQLMqGiJAuekX453jxTLERoVJlA7RSVspHfyk5WA6XUVsuLzH5xAq2uzXOg+gCd7XOo5+OgpFJx92ctHGqsdL3J0ItbU2A3+NBvimYd9ibbdPQDSrjNpAb7WnqfZL2h7HPxMnzkc5v8uTprxjFNMzaWQZRGNNEW+/ib357mgDFoL8v9aIz3qKruMmcz+Z81XdcyVgRapvzB9DWm9XSEDWuDXFIc5rVMShhR+FgX6R9Pz61nhoC8nZaK3IOcuvQk7XorD5BDMZFZXjYWZTsxsLEbEbfGmgtF80t1GoeWfeBMRmDHJMoXbKzRrmCe/YgMB1CnUjfXxraLExkyIkpkKxtNBKO66gKGKNYlfDTx8qT8bxRkTDy5jmaMh2FgWyHLqeu9CYHGdiQyrmFiGHVWBDAH1+6hLy67rjlzjLXvuLiSETaNOlUgZWk6kZiTpYjKxgGBARHyh5HLtlTNq6IAAzDS9hoDpyo2A5HEkTGNxsyG3oRsR4EUIkQZS8LF1HvA++n668x9oaeVWjeuDKb2kEAg8UqoKtJ4MkHMQfEHXxRknEbn59Qt/7aNe7/ANSMbD7S6/rVeaMqA2hVvddTcN5EfhuOdDhqyQtFdoWC395GF43/AFlOl/Ea1MOpjduOB9D7oZZUO/Y8R6j1F+UJ57MYH5ROsRNlvdj0A3PoATXsMZ7IwPGQISGKMUu2a7AEhbFdb2K+Zof/AGbYENFJMqdm791VOo1sWysdSMo2P1q9a2NuzRro2HYDzJABPkHH8dPpkOHXw+GAsTbqtSlUJad1t7XnKRJFoaCdDkvhb4FFYlboeqMV/CqO8q63Eo6Po/ow1J8716P21wIhxbhRZCQyfqsLgel7elefLUh1NhvEdLLZp1nYbGR4dyrFjEYgAlWuAUfTfodm+4npX0jD+y0BhW8bZjCzls9rMFcju227or5ji4w1rjmPxr7fgmthVG4GGbT/AKbfCipzJBvYql+oVcIplm7LgDqLnv8ANfFpWsTSabibZibkEaaG2g5aU6mkhLELJkNz3ZVt/ELg0tn4Yc2Yrp1Go+I0qs92KMJWy2jUptJIkakQ4eEjvyRcBGUeVdWWauo1WxJbCjMbKCx6KL0WIET9NJr9SOzN6n3V9SfKpDuwylhEn1IxqfO2p9TV4SseirY+WZ/yWkYQPz7Iy6o6wt0ue+CP7Wu6reFpN41XDrfSRzaVvAOe9fwjAreHCRRnv3zn+8GZ2PVIQefWQgeFZJE98zN2d+d7yEdM+49KZ4PCqgzWKKdyNZH8L8r9aBzjO786fgHqrGy7EQSX24xM/wDcfutfN4EWw8bGSxBYshtoqEPMV6ZgMsKnogA8a0KuVyACGI65I7lm8XYXdz1ty+nWS8yLRpe9vpHxLnW/j99Yf71UXXDoZGO55X6sTufO58aVWa9438usDt1PZC1qAot3WjuEk9ABh9eIBRAwRC2j+bsDZrAkHqNcqdLjMerCk5xUWHJ7KRnlIIZ1PI768/61NFth3lPz7s/+DFtf7Tf6mtcbgCsXeRQinMIo977XeQ11M8BbibDs4+KZtLmQSSGkDKZI6wYZ3zphlLAt88sEREKBA4ZgTc6X+P8AP00zgi4OlYSg2BltHGDcRruw/G56mrmM2eeKJlw+a1ib5b2A1570TmfPn46JdOqRl1I7yXAAWaLAybZ2uhsXADWHyQhc5Kga21ufWmKx5iALa9dqGOGJ7iglr6WOlv6tR02iYSa7JOOOXb/hCRNrcEjx23okAAd7QeNYywEaH1HStjgyct9SPHl0P509oItCpnmthCCoYXsdr6edr+dcIDzrdOFkx9sASoOU2N9dx5DUUXLi4oHVlAZWSzxyAGx5gW35EGmYmoxs5gF5wgweZBtIFp53HKUK2GKhGZWCMbBgLjQ67c/Cr4spCHRlEin9FIuZe95HcdQaxwc2dZY8xVLZlF+YP42oZJCnckOaNtmOo9elcXz8t2+9lwa1jQWjMZmDe4IjLCdJEi1+Onyt5pI+1a4TKvjlJ5nn602EZCY1CN8ko8VLXv8AwilccJiuyjMjCzW3A6jrTOGaQopBDgIyEfXjblfkRQmQwtGfom0A0vmqTEHmbjDnNxB8CNUpgxxXusueIm+Tmvih3U6n486JOF7vaRNnj621W/Jxy89qzfCD3o9RzVhqvgRzquFZo2zxmx5jkw6MOdcARcKo5w+2r3jMe45HwV4kIYOjFHGzL/PqKZQ4iOU5ZAsUx2I0jkP/AKN91UhCTfoxkkHvRnY+KH+VDyxg3Vh5g1OEHebY/LFAS6kMLwHMPd1BzB+FFTRshyuCD4/y6iqe8Qo5m1Rh8cUXs5fnIuRPvJ5HcinvsZwtZsYgvmi94nwAufwNNDpF1VrNawFzDbn6xbtHdovpnB8J2MMahCxiiZyALkuwDqLDf+zHoa857HYfGpi27eJ2il0OYNdb7Hba4U+lPeO8bjw8faTLmLucqhgvu2zHbbUAetebHt/gwR/w7/8A2f8A5pr2tkSbjpnrFxqvP7NUrGm9zGSH9bi0AjCdAMyTfnCL/wBqnB8sccg1yHJf7D3db+vaj4V85wuFLhjcBV3Jr7fx5lxmFCKNJIe7r9Iapr1zrl9a+BNxRoXZRYjYg86U50QX6/Pz2rToAuY6nQ/bEToLW1yBAEyJW2KhsAysGGcC486+04Q/8Mn/AMZ//E1fDv8AeOcZVQKM4vbnX3DC/wDKp/8AGf8A8TUVMgl0cCqn6iHhtMP/AObeHEZwviWIsSb9aFWLKboSh+ybVvOe8fOsiaruANitqmS2C0wVPyqX66nzRb+uldWV66hwhP8A6ir/AMipji6mw6Lv6mjIUsO6Ao686AbGquii5rgkknvGwpRIHz4O5WGAxuj0Hacz5cka2MjQ/Wb40TA7yEdowjX4n+vjQmHwqrRIS+3xNRD3Wy809r2MFxi5ZDuFz4LpMEGY3ZmW+gOg9aIjRRodvqroPXrWLzonvNehX4uNkWiFNgMuueaVUrvc0sacIOYbmepF+yU8GKyiyAAfZFAzCaQ92y+J1+AoIYpt3a3gKzfih2UfGjNXh7eKClslNkFxiMrXnjA16laz4VItWJkk+OtVijdrNM2WO4ut9SByA8qH/wB4P0FZxs0jam/U9BQTisLcgnBzW3z62HdmeiZSQozMcMrdiNi30SN/vqcTAGjzlSjXABX3dNyed6xxfEcidlH7t7sOtMMPxBOyKhcyt1+ia5rCBhmSOuXM8VZpvo1SRMAtM2EYr/aBk0Ta8jPKEI2EMcebIcr21Ouo8eVGziOGSKSJsyC2hGx6Gkk+KkAMWy8unpQkGJdd9V5imSMj+O3pxVb67WkYGwd25uWubfdiIBOkJvxGYq7Mi2RjdlXl4ihZYBIAwOvJuvgfGiIHBAsbqdj08D4VSTDGMlkF1PvL/MUw5Xy8kJBdJ43Pb89krdWDX2YUdhZg4II1+kvXxHjRRgWVbg+R/kaWz4dg3RhsaEjCUuHNuLhMcLG0eou0fTmtELEV+ch1B1ZeR8R0NX4Pjg3dkFm/GipsGUOePbmOVRjjp5K6KIeyWd3qOfLuWceWTvobMP6sRzrKbDBthlfmOR8RUvFm+ciNmG46+Bq0GLD91hZh/WlPaQbKhWaRnedePsUrlj15hhsRuDR8OPElkn0bZZBz8GonEYTMNd+RpPPERowoHC8hJDnU7G4OiPmwLKbaW68jXuv9mWHWKKaTMgZiAAzgaE3LakdB8TXgcJxQBOzk22B8KIwc8cYOWQm/K9/hRtIsVm7c1xljZg5RzBGcHKfwvSe3+PTETBInDLCAosbg7kkEb6ki/gK8TOunjVS5DZhvf+hROMN7HrQkyrNOkKbA0aL6l7C8aD4JFMiq8RAGZgtwdbi5GxB+NfMf9oeDQY2UwspRjmGQggZwGIuumhJX0rNmIjFiRttQjC+9RU3mhpQUtmFGs6o0/cBbT5pzt2j4SPKBfqPxr7nheIRjCITJGAMO41kUG/ZsLZb73I5V8UIqe0NrXNqhjsGXCEO07ONow4jkQe4zwXTHU+dZMasTWZNCVZAU5TU1XOa6ukIN5RGqrsK0VmPhXV1JaAFdJLzBWnbBfGhZ+IsdBXV1S4kJYJdbRYICx3rcuE23qK6hGUp43WyFizk6mpBqK6hKEG6tqTYUWxyLYbmurqOmIFkTjiBJQlE4Pu68juKmuqW5yipCT0RjxAjKdjsaWSIVNjU11NeNV1YCJVYZDEb7qdxXoMK4IHQ7flXV1czOEVEkGENioTE2dNvpL/Oi2RZVBHpXV1QMiFZIDaoAyOaHGCv+sKLwOOIOR9f51FdQM+/DonVxhpio2xBhYY6JkfOh33HWrPEsy5l7riurqPiFWLRiA0dMjTJUwXECDkfei8VEHFdXU0ElslUmiXFhyC8nxAFWtWnD2qa6q4G+gf8Aaiia3nbQVNdTkkZFWkbuD0oa9RXVxXOU3qpNdXUKhUJqCaiuoSpUXqK6urly/9k="
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

export default AddProject;
