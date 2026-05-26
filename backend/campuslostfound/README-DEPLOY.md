# Campus Lost and Found System Backend Deployment

This document records the backend deployment checklist for Campus Lost and Found System. Keep real passwords, tokens, storage keys, WeChat secrets, and server domains outside the repository.

## Requirements

- JDK 17+
- MySQL 8.0+
- MinIO
- Maven Wrapper
- A reverse proxy or HTTPS gateway for production traffic

## Configuration

Use environment variables to configure runtime secrets and deployment addresses.

| Variable | Description |
| --- | --- |
| `DB_URL` | MySQL JDBC URL |
| `DB_USERNAME` | Database username |
| `DB_PASSWORD` | Database password |
| `JWT_SECRET` | JWT signing secret |
| `MINIO_ENDPOINT` | MinIO service endpoint |
| `MINIO_ACCESS_KEY` | MinIO access key |
| `MINIO_SECRET_KEY` | MinIO secret key |
| `MINIO_BUCKET` | MinIO bucket name |
| `MINIO_READ_PATH` | Public file read path |
| `WECHAT_MINIAPP_APPID` | WeChat mini program AppID |
| `WECHAT_MINIAPP_SECRET` | WeChat mini program secret |

The local development defaults use `localhost`. Production should provide explicit environment variables and route public traffic through an HTTPS domain.

## Database

```sql
CREATE DATABASE campus_lost_found DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

From the repository root:

```bash
mysql -u <user> -p campus_lost_found < sql/init.sql
```

## Start

Linux or macOS:

```bash
cd backend/campuslostfound
./mvnw -DskipTests spring-boot:run
```

Windows:

```powershell
cd backend\campuslostfound
.\mvnw.cmd -DskipTests spring-boot:run
```

## Production Notes

- Use an HTTPS domain for the mini program API and configure it in the WeChat mini program console.
- Put the backend behind a reverse proxy, then expose `/api` to the admin web client and mini program.
- Rotate any secret that has ever been committed before making the repository public.
- Keep uploaded images in MinIO or another object storage service rather than inside the application directory.
