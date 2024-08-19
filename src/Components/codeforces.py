from PIL import Image
from exif import Image as ExifImage

from opencage.geocoder import OpenCageGeocode
from AI import AI

def get_city_opencage(latitude, longitude):
    # Replace with your OpenCage API key
    key = 'bda80b40f0e3499890d03cdc3b5fab73'
    geocoder = OpenCageGeocode(key)

    try:
        # Get the location from latitude and longitude
        results = geocoder.reverse_geocode(latitude, longitude)

        if results and len(results):
            address = results[0]['components']
            # Get the city from the address
            city = address.get('city', '')

            if not city:
                # Sometimes the city might be in the 'town' or 'village' field
                city = address.get('town', '')

            if not city:
                # If the city is still not found, try the 'county' field
                city = address.get('county', '')
            print(city)
            AI(city=city)
        else:
            print("No results found.")
            return None
    except Exception as e:
        print(f"Geocoding service error: {e}")
        return None
def dms_to_decimal(degrees, minutes, seconds):
    decimal_degrees = degrees + (minutes / 60) + (seconds / 3600)
    return decimal_degrees
def get_exif_data(image_path):
    # Open the image file
    pil_image = Image.open(image_path)

    # Display some basic details
    # print(f"Image format: {pil_image.format}")
    # print(f"Image size: {pil_image.size}")
    # print(f"Image mode: {pil_image.mode}")

    # Extract EXIF data
    with open(image_path, 'rb') as image_file:
        exif_image = ExifImage(image_file)

        if exif_image.has_exif:
        #     print("EXIF data found:")
            lati=exif_image["gps_latitude"]
            lat=dms_to_decimal(lati[0],lati[1],lati[2])
            if(exif_image["gps_latitude_ref"]=="S"):
                lati*=-1
            long=exif_image["gps_longitude"]
            lon=dms_to_decimal(long[0],long[1],long[2])
            if(exif_image["gps_longitude_ref"]=="W"):
                lon*=-1
            get_city_opencage(lat,lon)

        else:
            print("No EXIF data found.")


def imag(file):
    get_exif_data(file)
