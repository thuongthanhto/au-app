export function searchProduct(
  arrays,
  pageSize,
  order,
  categories,
  qsrs,
  searchTerm,
) {
  let arraysClone = [...arrays];

  if (searchTerm.length > 0) {
    const searchEnergyTolerance = 100;
    const energyPattern = /^(\d+(\.\d+)?) ?(kj|KJ)?$/;
    const energyMatch = searchTerm.match(energyPattern);

    if (energyMatch) {
      
      const searchEnergyTerm = parseInt(energyMatch[1], 10);
      arraysClone = arraysClone.filter(item => {
        return (
          item.Energy > searchEnergyTerm - searchEnergyTolerance &&
          item.Energy < searchEnergyTerm + searchEnergyTolerance
        );
      });
    } else {
      const arraysCloneName = arraysClone.filter(item => {
        return item.Name.split("'").join('').toLowerCase().includes(searchTerm.split("’").join('').toLowerCase());
      });

      arraysClone = [...arraysCloneName];
    }
  }

  if (categories.length > 0) {
    arraysClone = arraysClone.filter(item => {
      return categories.includes(item.Category_id);
    });
  }

  if (qsrs.length > 0) {
    arraysClone = arraysClone.filter(item => {
      return qsrs.includes(item.QSR_id.toString());
    });
  }

  arraysClone.sort((a, b) => {
    if (order === 'asc') {
      return a.Name.localeCompare(b.Name);
    }
    return b.Name.localeCompare(a.Name);
  });

  console.log('arraysClone', arraysClone)
  const result = arraysClone.slice(0, pageSize);

  return result;
}

export function getCategories(arrays) {
  const arraysClone = [...arrays];

  arraysClone.sort((a, b) => {
    const lastCodeIn = b.Name.toLowerCase().charCodeAt();
    const lastCode = b.Name.charCodeAt();
    const firstCodeIn = a.Name.toLowerCase().charCodeAt();
    const firstCode = a.Name.charCodeAt();

    if (firstCodeIn - lastCodeIn === 0) {
      return firstCode - lastCode;
    }
    return firstCodeIn - lastCodeIn;
  });

  return arraysClone;
}

export function getQsrs(arrays) {
  const arraysClone = [...arrays];

  arraysClone.sort((a, b) => {
    const lastCodeIn = b.Name.toLowerCase().charCodeAt();
    const lastCode = b.Name.charCodeAt();
    const firstCodeIn = a.Name.toLowerCase().charCodeAt();
    const firstCode = a.Name.charCodeAt();

    if (firstCodeIn - lastCodeIn === 0) {
      return firstCode - lastCode;
    }
    return firstCodeIn - lastCodeIn;
  });

  return arraysClone;
}
