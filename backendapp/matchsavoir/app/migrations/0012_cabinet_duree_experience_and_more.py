# Generated by Django 5.0.6 on 2024-06-20 15:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_cabinet_formateur'),
    ]

    operations = [
        migrations.AddField(
            model_name='cabinet',
            name='duree_experience',
            field=models.IntegerField(default=5),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='certifications',
            name='fichier',
            field=models.ImageField(blank=True, null=True, upload_to='photos/'),
        ),
        migrations.AlterField(
            model_name='certifications',
            name='formateur',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='certifications', to='app.formateur'),
        ),
        migrations.AlterField(
            model_name='competence',
            name='formateur',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='competances', to='app.formateur'),
        ),
        migrations.AlterField(
            model_name='domaineexpertise',
            name='cabinet',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='domaineExpertises', to='app.cabinet'),
        ),
        migrations.AlterField(
            model_name='domaineexpertise',
            name='formateur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='domaineExpertises', to='app.formateur'),
        ),
    ]