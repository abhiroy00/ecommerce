# Generated by Django 5.1.3 on 2024-12-30 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('email', models.FloatField(max_length=100)),
                ('message', models.TextField(max_length=100)),
            ],
        ),
    ]
