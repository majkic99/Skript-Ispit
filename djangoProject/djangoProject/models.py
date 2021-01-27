# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Fudbaleri(models.Model):
    idfudbaleri = models.AutoField(db_column='idFudbaleri', primary_key=True)  # Field name made lowercase.
    ime = models.CharField(max_length=45, blank=True, null=True)
    prezime = models.CharField(max_length=45, blank=True, null=True)
    golovi = models.IntegerField(blank=True, null=True)
    asistencije = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fudbaleri'


class Timovi(models.Model):
    idtimovi = models.AutoField(db_column='idTimovi', primary_key=True)  # Field name made lowercase.
    ime_tima = models.CharField(max_length=45, blank=True, null=True)
    osvojeni_poeni = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'timovi'


class Users(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(unique=True, max_length=60)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'users'
