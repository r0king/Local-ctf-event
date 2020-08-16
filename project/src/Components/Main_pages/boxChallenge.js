import React from 'react';
function boxChallenge({match}) {
  console.log(match)
const regexforid=new RegExp("(?=.*[0-9])");

  if (regexforid.test(match.params.id) ) {
    return (
        <div>
            {match.params.id}
        </div>
      );
      
  }
    return (
    <div>
        Invalid Option
    </div>
  );
}

export default boxChallenge;
