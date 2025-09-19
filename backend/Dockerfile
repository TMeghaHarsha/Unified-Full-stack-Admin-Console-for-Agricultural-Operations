# Backend Dockerfile
FROM python:3.11-slim

# Set work dir
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project
COPY . .

# Run migrations & start server (CMD can be overridden in docker-compose)
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
