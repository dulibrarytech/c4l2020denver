import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import terminal from '../images/terminal.jpg'
import union from '../images/union.jpeg'
import idealab from '../images/idealab.jpeg'
import mca from '../images/mca.jpg'
import skyline from '../images/skyline.jpg'
import omf from '../images/omf.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={skyline} alt="" /></span>
          <p>Why should code4lib come to Denver? There's 300 days of sunshine, a thriving arts and culture scene, a walkable downtown,  a wide array of breweries, and the majestic Rocky Mountains is right in its backyard. Denver’s charm is simply a mile above the rest. The hosting committee is looking forward to welcoming the Code4Lib community to exchange ideas and experiences in our beautiful city and have fun at the same time. </p>

          <h3>Did you know?</h3>
          <p>
          <li>There is a 140 mile long panoramic view of the mountains from Denver</li>
          <li>There are 200 named peaks visible from Denver</li>
          <li>Denver really is exactly one mile high</li>
          </p>
          {close}
        </article>

        <article id="conference" className={`${this.props.article === 'conference' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About the Conference</h2>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}


          <h2 className="major">Costs</h2>
          <p>These are the anticipated costs for the conference:
          <br/>
<br/>Main Conference: $395
<br/>Main Conference (after January 23rd) : $450
<br/>Pre-Conference : $50 per half day ($100 for full day)
<br/>Reception "plus one": $60 (limit one "plus one" per registration)
<br/>Hotel: Doubletree is $200/night plus taxes but there are other nearby options</p>
          {close}

          <h2 className="major">Calendar</h2>
          <p>Late February or Early March 2020</p>

<p><a href="https://www.accuweather.com/en/us/denver-co/80203/month/347810?monyr=2/01/2020">February 2020 Weather</a></p>

<p><a href="https://www.accuweather.com/en/us/denver-co/80203/march-weather/347810?monyr=3/1/2020">March 2020 Weather</a></p>

<h2 className="major">Getting Here</h2>
<ul>
<li>Denver International Airport https://www.flydenver.com/flights</li>
<li>RTD http://www.rtd-denver.com/airport.shtml </li>
<ul><li>RTD's University of Colorado A Line and SkyRide bus service offer convenient, affordable options to get to and from Denver International Airport (DEN). Getting to the airport costs just $10.50 from anywhere in the RTD service area. </li></ul>
</ul>

<h2 className="major">Accommodations</h2>
<li>The fancy new Gaylord Rockies Resort and Convention Center near the airport</li>
<li>The McNichols Civic Center Building (in the middle of downtown - might be preferable as a reception venue)</li>
<li>Embassy Suites by Hilton downtown - site for LITA Forum in 2017 so might be familiar to some attendees</li>
<li>Double Tree by Hilton Hotel Denver.  Here's a link to their "Plan an Event" information: https://doubletree3.hilton.com/en/hotels/colorado/doubletree-by-hilton-hotel-denver-RLDV-DT/event/index.html</li>
<li>CU Denver?</li>


          {close}

        </article>

        <article id="city" className={`${this.props.article === 'city' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About the City</h2>
          <span className="image main"><img src={terminal} alt="" /></span>

          {close}

          <h2 className="major">Transportation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}

          <h2 className="major">Attractions</h2>
          <span className="image main"><img src={union} alt="" /></span>
<ul>
<li><a href="https://www.usmint.gov/about/mint-tours-facilities/denver/visiting-the-denver-mint">Denver Mint, there are only two mints in the United States (the other is in Philadelphia)</a></li>
<li><a href="https://www.redrocksonline.com/ ">Red Rocks Amphitheatre, not just for shows but for a spectacular view of the city</a></li>
<li><a href="https://www.botanicgardens.org/">Denver Botanic Gardens</a></li>
<li><a href="https://leg.colorado.gov/Visit-Learn">Colorado State Capital, located “a mile high”</a></li>
<li><a href="https://unionstationindenver.com/">Union Station </a></li>
<li><a href="http://www.buckhorn.com/">Buckhorn Exchange</a></li>
<li><a href="https://www.denver.org/blog/post/haunted-cheesman-park/">Cheesman Park</a></li>
<li><a href="https://www.denver.org/listing/washington-park/6828/">Wash Park</a></li>
<li><a href="https://www.larimersquare.com/">Larimer Square</a></li>
<li><a href="http://www.the-1up.com/">The 1up</a></li>
</ul>


          <h3> Beer </h3>
          <span className="image main"><img src={omf} alt="" /></span>
<p>According to CNN, Denver is America's best beer town (sorry, Portland).</p>

<p>Artisan Breweries
<br/>
<li><a href="http://www.baerebrewing.com">Baere Brewing Company </a></li>
<li><a href="http://calltoarmsbrewing.com">Call to Arms Brewing Company </a></li>
<li><a href="http://cerebralbrewing.com">Cerebral Brewing </a></li>
<li><a href="http://www.crookedstave.com">Crooked Stave Artisan Beer Project </a></li>
<li><a href="http://www.fictionbeer.com (bring your library card for $1 off)">Fiction Beer Company </a></li>
<li><a href="https://greatdivide.com">Great Divide Brewing Co </a></li>
<li><a href="http://www.jaggedmountainbrewery.com">Jagged Mountain Brewery </a></li>
<li><a href="https://www.littlemachinebeer.com">Little Machine Beer </a></li>
<li><a href="http://www.omfbeer.com/beer">Our Mutual Friends Brewing Company </a></li>
<li><a href="https://prostbrewing.com/our-bier">Prost Brewing </a></li>
</p>

<p>Beer Pubs

<li>Falling Rock Tap House </li>
<li><a href="https://goedzuur.com">Goed Zuur Sour Beer Tap Room</a></li></p>

          <h3> Museums and Galleries </h3>
          <span className="image main"><img src={mca} alt="" /></span>
          <p>
<li><a href="https://mcadenver.org/">Museum of Contemporary Art </a></li>
<li><a href="https://denverartmuseum.org/">Denver Art Museum </a></li>
<li><a href="https://www.historycolorado.org/">History Colorado </a></li>
<li><a href="https://bawmhc.org/">Black American West Museum and Heritage Center </a></li>
<li><a href="https://mollybrown.org/">Molly Brown House Museum </a></li>
<li><a href="https://www.robischongallery.com/">Robischon Gallery </a></li>
<li><a href="https://denversartdistrict.org/ ">Santa Fe Arts District </a></li>
<li><a href="https://clyffordstillmuseum.org/">Clyfford Still Museum </a></li>
<li><a href="https://www.dmns.org/">Denver Museum of Nature & Science </a></li>
<li><a href="http://www.kirklandmuseum.org/">Kirkland Museum of Fine and Decorative Art </a></li>
<li><a href="https://denverfirefightersmuseum.org/">Denver Firefighters Museum </a></li>
</p>

          <h3> Libraries </h3>
          <span className="image main"><img src={idealab} alt="" /></span>
          <ul>
<li><a href="https://www.denverlibrary.org/fine-free">Denver Public Library</a></li>
See <a href="https://www.denverlibrary.org/locations">Locations & Hours</a>

Branches with an ideaLAB
<ul>
<li>Central Library </li>
<li>Rodolfo “Corky” Gonzales (also has a barista station on the main floor and a cool outdoor space upstairs)</li>
<li>Hampden </li>
<li>Montbello</li>
<li>Hadley</li>
</ul>

<li><a href="https://library.auraria.edu/">Auraria Library</a></li>
<li><a href="https://library.du.edu/">University of Denver Library</a></li>
<li><a href="https://denverzinelibrary.org/">Denver Zine Library</a></li>
</ul>


          {close}
        </article>


        <article id="support" className={`${this.props.article === 'support' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>

          <h2 className="major">Hosting Committee</h2>
<ul>
<li>Erin Elzi, University of Denver</li>
<li>Megan Hartline, Denver Public Library</li>
<li>Andrew Johnson, University of Colorado Boulder</li>
<li>Kim Pham, University of Denver <a href="https://www.twitter.com/tolloid" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
<li>Elia Trucks, University of Denver</li>
<li>Neena Wang, University of Colorado Denver</li>
</ul>

          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main