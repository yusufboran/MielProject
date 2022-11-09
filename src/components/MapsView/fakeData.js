const TOTAL_COUNT = 20;

export const susolvkaCoords = { lat: 41.0317770592092, lng: 28.99349299788066,};

export const markersData = [...Array(TOTAL_COUNT)]
  .fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat:
      susolvkaCoords.lat +
      0.01 *
        index *
        Math.sin(30 * Math.PI * index / 180) *
        Math.cos(50 * Math.PI * index / 180) +
      Math.sin(5 * index / 180),
    lng:
      susolvkaCoords.lng +
      0.01 *
        index *
        Math.cos(70 + 23 * Math.PI * index / 180) *
        Math.cos(50 * Math.PI * index / 180) +
      Math.sin(5 * index / 180),
  }));
