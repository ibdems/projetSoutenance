# Generated by Django 5.0.6 on 2024-06-19 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_remove_cabinet_logo_alter_annee_formation_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='formation',
            name='duree',
        ),
        migrations.RemoveField(
            model_name='formation',
            name='prix',
        ),
        migrations.AddField(
            model_name='session',
            name='duree',
            field=models.IntegerField(default=30),
            preserve_default=False,
        ),
    ]
