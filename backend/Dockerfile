# Use the official Python image as the base
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy everything from the `backend` folder (including `manage.py`) into the container
COPY backend /app/

# Install the necessary dependencies
RUN pip install --no-cache-dir -r /app/requirements.txt

# Expose port 8000 for the Django application
EXPOSE 8000

# Command to run the Django app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
