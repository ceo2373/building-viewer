/// <amd-dependency path="esri/core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="esri/core/tsSupport/decorateHelper" name="__decorate" />

import { subclass, declared, property } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import Section = require("./Section");
import Camera = require("esri/Camera");

import Timetable = require("../widgets/Timetable/Timetable");

@subclass("sections/HomeSection")
class HomeSection extends declared(Section) {
  @property()
  title = "About us";

  @property()
  id = "home";

  @property()
  timetable = new Timetable();

  @property()
  // camera = new Camera({"position":{"spatialReference":{"wkid":4326,},"x":172.6353490982857,"y":-43.529189012257284,"z":56.58640745468438},"heading":122.88346846437418,"tilt":77.70315705279316});
  //camera = new Camera({"position":{"spatialReference":{"wkid":2193},"x":1570527.3036612223,"y":5180359.178648159,"z":86.69521235276355},"heading":124.3049960081546,"tilt":73.36076191888827});
  // ipad friendlier camera: 
  camera = new Camera({"position":{"spatialReference":{"wkid":2193},"x":1570544.291609822,"y":5180361.938219893,"z":71.53173486068152},"heading":124.30499600935663,"tilt":73.36076191907371});

  render() {
    return (<div id={this.id}>
      <h1>T&#x16b;ranga Library</h1>
      <p>T&#x16b;ranga is a library in Central Christchurch and the main library of Christchurch City Libraries, New Zealand. It is the largest library in the South Island and the third-biggest in New Zealand. The previous Christchurch Central Library opened in 1982 on the corner of Oxford Terrace and Gloucester Street but was closed after the February 2011 Christchurch earthquake and demolished in 2014 to make way for the Convention Centre Precinct.</p>
      <section class="information">
        <h2 class="slash-title">Information</h2>
        <p>
          <h5 class="inline">Size</h5> Approx 9850m<sup>2</sup>, making it the largest public library in the South Island 
        </p>
        <p>
          <h5 class="inline">Site</h5> <a href="https://www.google.com/maps?ll=-43.529977,172.636805&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=3913235168885151081">60 Cathedral Square</a> - corner of Cathedral Square, Colombo Street, and Gloucester Street
        </p>
        <p>
          <h5 class="inline">Cost</h5> $92.7 million
        </p>
        <p>
          <h5 class="inline">Opening</h5> Friday 12 October 2018
        </p>
      </section>
    </div>);
  }

  paneRight() {
    return (<div>{this.timetable.render()}</div>);
  }
}

export = HomeSection;
