const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const exifr = require('exifr');
const axios = require('axios');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

const AI = (city) => {
  // Dummy AI function - replace with actual implementation
  console.log(`Processing city: ${city}`);
};

const getCityOpenCage = async (latitude, longitude) => {
  const key = 'bda80b40f0e3499890d03cdc3b5fab73';
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`;

  try {
    const response = await axios.get(url);
    const results = response.data.results;

    if (results && results.length) {
      const address = results[0].components;
      let city = address.city || address.town || address.county || '';

      console.log(city);
      AI(city);
    } else {
      console.log('No results found.');
    }
  } catch (error) {
    console.error('Geocoding service error:', error);
  }
};

const dmsToDecimal = (degrees, minutes, seconds) => {
  return degrees + minutes / 60 + seconds / 3600;
};

const getExifData = async (imagePath) => {
  try {
    const exifData = await exifr.parse(imagePath);

    if (exifData) {
      const latitude = dmsToDecimal(...exifData.GPSLatitude);
      const longitude = dmsToDecimal(...exifData.GPSLongitude);

      if (exifData.GPSLatitudeRef === 'S') {
        latitude *= -1;
      }
      if (exifData.GPSLongitudeRef === 'W') {
        longitude *= -1;
      }

      await getCityOpenCage(latitude, longitude);
    } else {
      console.log('No EXIF data found.');
    }
  } catch (error) {
    console.error('Error extracting EXIF data:', error);
  }
};

app.post('/upload', upload.single('image'), async (req, res) => {
  const filePath = path.join(__dirname, req.file.path);
  await getExifData(filePath);
  res.json({ message: 'File uploaded successfully' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
