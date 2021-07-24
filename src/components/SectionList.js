import React from 'react';

// Components.
import Section from './Section';

function SectionList({ printingRef, uavRef, engineeringRef, modelingRef }) {

  return (
    <div>
      {/* One of the topics - Printing */}
      <Section
        bigText={`3D spausdinimas`}
        subText={`Susipažinę su techniniu modeliavimu, TinkerCAD ir Fusion 360 programose atlieka įvairius projektinius darbus. Gamina modelius, maketus ar detalių prototipus.`}
        secRef={printingRef}
        reference={'3d-printing'}
      />

      {/* One of the topics - UAV */}
      <Section
        bigText={`Bepiločiai`}
        subText={`Mokinių kūrybinėse dirbtuvėse sumodeliuoti, sukonstruoti ir pagaminti bepiločiai orlaiviai. Jų valdymas atliekamas stimuliatoriuje, eksperimentuojant ir testuojant modelius.`}
        secRef={uavRef}
        reference={'uav'}
        //video={getVideo('uav')}
      />

      {/* One of the topics - Engineering solutions */}
      <Section
        bigText={`Elektronikos inžinerija`}
        subText={`Mokinių projektiniai darbai atlikti naudojant elektronikos įtaisus ar integruotąsias elektronines sistemas, integrinių grandynų lustus, valdiklius ir kitus elektroninius įtaisus. Taip atlikdami įvairias užduotis gerina elektronikos žinias.`}
        secRef={engineeringRef}
        reference={'engineering'}
        //video={
        //window.innerWidth > 840 ? mechatronicsVideo : mechatronicsVideo_min
        //}
      />

      {/* One of the topics - Modeliavimas */}
      <Section
        bigText={`Modeliavimas`}
        subText={`Mokiniai susipažinę su įvairiomis medžiagomis, išmoksta elementarių, bet nuosekliai sudėtingėjančių medžiagų rankinio apdorojimo būdų, atlieka konstravimo ir modeliavimo darbus. Mokinasi gaminti techninius žaislus, laivų ir lėktuvėlių modelius.`}
        secRef={modelingRef}
        reference={'modelling'}
        //video={window.innerWidth > 840 ? laserVideo : laserVideo_min}
      />
    </div>
  );
}

export default SectionList;
