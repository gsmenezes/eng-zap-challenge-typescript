const boundingBox = (lat:number, lon: number) => {
    const minLon = -46.693419;
    const maxLon = -46.641146;
    const minLat = -23.568704;
    const maxLat = -23.546686;
  
    return lat <= maxLat && lat >= minLat && lon <= maxLon && lon >= minLon;
  };
  
  export { boundingBox };