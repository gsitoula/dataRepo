{
    "CentralPosDebAutWS": {
        "CentralPosDebAutWSSoap": {
            "getPresentacionesAbiertas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesAbiertasResult": {
                        "CodError": "s:int",
                        "ListaPresentaciones": {
                            "Presentacion[]": {
                                "IdPresentacion": "s:int",
                                "Tarjeta": "s:string",
                                "IdTarjeta": "s:int",
                                "FechaPresentacionDesde": "s:dateTime",
                                "FechaPresentacionHasta": "s:dateTime",
                                "Periodo": "s:dateTime",
                                "NumeroDeComercio": "s:string",
                                "NumeroRepeticion": "s:int",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getEstadoPresentaciones": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getEstadoPresentacionesResult": {
                        "CodError": "s:int",
                        "ListaPresentaciones": {
                            "PresentacionProcesada[]": {
                                "IdPresentacion": "s:int",
                                "Tarjeta": "s:string",
                                "IdTarjeta": "s:int",
                                "Periodo": "s:dateTime",
                                "FechaDeProcesamiento": "s:dateTime",
                                "NumeroDeComercio": "s:string",
                                "NumeroRepeticion": "s:int",
                                "IdEstado": "s:int",
                                "Estado": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "putProcesaPresentacion": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int"
                },
                "output": {
                    "putProcesaPresentacionResult": "s:int"
                }
            },
            "addRegistro": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int",
                    "DatoOpcional1": "s:string",
                    "DatoOpcional2": "s:string",
                    "IdUser": "s:string",
                    "NroTarjeta": "s:string",
                    "Importe": "s:decimal"
                },
                "output": {
                    "addRegistroResult": "s:int"
                }
            },
            "delRegistro": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int",
                    "IdUser": "s:string"
                },
                "output": {
                    "delRegistroResult": "s:int"
                }
            },
            "listRegistros": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int"
                },
                "output": {
                    "listRegistrosResult": {
                        "CodError": "s:int",
                        "ListaRegistros": {
                            "Registro[]": {
                                "DatoOpcional": "s:string",
                                "DatoOpcional2": "s:string",
                                "IdUser": "s:string",
                                "NroTarjeta": "s:string",
                                "Importe": "s:decimal",
                                "Aplicado": "s:boolean",
                                "Observaciones": "s:string",
                                "CodErrorTarjeta": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "listTarjetasHabilitadas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "listTarjetasHabilitadasResult": {
                        "CodError": "s:int",
                        "ListaTarjetas": {
                            "Card[]": {
                                "IdTarjeta": "s:int",
                                "Tarjeta": "s:string",
                                "NroDeComercio": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getInfoDO": {
                "input": {
                    "KeyDO": "s:string",
                    "KeyCliente": "s:string"
                },
                "output": {
                    "getInfoDOResult": {
                        "CodError": "s:int",
                        "UserDO": "s:string",
                        "DatoDO": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getPresentacionesRespondidas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesRespondidasResult": {
                        "Presentacion[]": {
                            "IdPresentacion": "s:int",
                            "Tarjeta": "s:string",
                            "IdTarjeta": "s:int",
                            "FechaPresentacionDesde": "s:dateTime",
                            "FechaPresentacionHasta": "s:dateTime",
                            "Periodo": "s:dateTime",
                            "NumeroDeComercio": "s:string",
                            "NumeroRepeticion": "s:int",
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "putDatosPresentacionAbierta": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "idPresentacion": "s:int",
                    "DatosImportacion[]": {
                        "DatoOpcional1": "s:string",
                        "DatoOpcional2": "s:string",
                        "idUser": "s:string",
                        "NroTarjeta": "s:string",
                        "Importe": "s:decimal",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "putDatosPresentacionAbiertaResult": {
                        "RegistrosImportados": "s:int",
                        "ErroresImportacion": {
                            "ErrorImportacion[]": {
                                "DatoOpcional1": "s:string",
                                "DatoOpcional2": "s:string",
                                "idUser": "s:string",
                                "NroTarjeta": "s:string",
                                "Importe": "s:decimal",
                                "DetalleError": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "ErroresGenerales": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getPresentacionesFuturas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesFuturasResult": "s:int"
                }
            }
        },
        "CentralPosDebAutWSSoap12": {
            "getPresentacionesAbiertas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesAbiertasResult": {
                        "CodError": "s:int",
                        "ListaPresentaciones": {
                            "Presentacion[]": {
                                "IdPresentacion": "s:int",
                                "Tarjeta": "s:string",
                                "IdTarjeta": "s:int",
                                "FechaPresentacionDesde": "s:dateTime",
                                "FechaPresentacionHasta": "s:dateTime",
                                "Periodo": "s:dateTime",
                                "NumeroDeComercio": "s:string",
                                "NumeroRepeticion": "s:int",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getEstadoPresentaciones": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getEstadoPresentacionesResult": {
                        "CodError": "s:int",
                        "ListaPresentaciones": {
                            "PresentacionProcesada[]": {
                                "IdPresentacion": "s:int",
                                "Tarjeta": "s:string",
                                "IdTarjeta": "s:int",
                                "Periodo": "s:dateTime",
                                "FechaDeProcesamiento": "s:dateTime",
                                "NumeroDeComercio": "s:string",
                                "NumeroRepeticion": "s:int",
                                "IdEstado": "s:int",
                                "Estado": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "putProcesaPresentacion": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int"
                },
                "output": {
                    "putProcesaPresentacionResult": "s:int"
                }
            },
            "addRegistro": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int",
                    "DatoOpcional1": "s:string",
                    "DatoOpcional2": "s:string",
                    "IdUser": "s:string",
                    "NroTarjeta": "s:string",
                    "Importe": "s:decimal"
                },
                "output": {
                    "addRegistroResult": "s:int"
                }
            },
            "delRegistro": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int",
                    "IdUser": "s:string"
                },
                "output": {
                    "delRegistroResult": "s:int"
                }
            },
            "listRegistros": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "IdPresentacion": "s:int"
                },
                "output": {
                    "listRegistrosResult": {
                        "CodError": "s:int",
                        "ListaRegistros": {
                            "Registro[]": {
                                "DatoOpcional": "s:string",
                                "DatoOpcional2": "s:string",
                                "IdUser": "s:string",
                                "NroTarjeta": "s:string",
                                "Importe": "s:decimal",
                                "Aplicado": "s:boolean",
                                "Observaciones": "s:string",
                                "CodErrorTarjeta": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "listTarjetasHabilitadas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "listTarjetasHabilitadasResult": {
                        "CodError": "s:int",
                        "ListaTarjetas": {
                            "Card[]": {
                                "IdTarjeta": "s:int",
                                "Tarjeta": "s:string",
                                "NroDeComercio": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getInfoDO": {
                "input": {
                    "KeyDO": "s:string",
                    "KeyCliente": "s:string"
                },
                "output": {
                    "getInfoDOResult": {
                        "CodError": "s:int",
                        "UserDO": "s:string",
                        "DatoDO": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getPresentacionesRespondidas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesRespondidasResult": {
                        "Presentacion[]": {
                            "IdPresentacion": "s:int",
                            "Tarjeta": "s:string",
                            "IdTarjeta": "s:int",
                            "FechaPresentacionDesde": "s:dateTime",
                            "FechaPresentacionHasta": "s:dateTime",
                            "Periodo": "s:dateTime",
                            "NumeroDeComercio": "s:string",
                            "NumeroRepeticion": "s:int",
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "putDatosPresentacionAbierta": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    },
                    "idPresentacion": "s:int",
                    "DatosImportacion[]": {
                        "DatoOpcional1": "s:string",
                        "DatoOpcional2": "s:string",
                        "idUser": "s:string",
                        "NroTarjeta": "s:string",
                        "Importe": "s:decimal",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "putDatosPresentacionAbiertaResult": {
                        "RegistrosImportados": "s:int",
                        "ErroresImportacion": {
                            "ErrorImportacion[]": {
                                "DatoOpcional1": "s:string",
                                "DatoOpcional2": "s:string",
                                "idUser": "s:string",
                                "NroTarjeta": "s:string",
                                "Importe": "s:decimal",
                                "DetalleError": "s:string",
                                "targetNSAlias": "tns",
                                "targetNamespace": "https://acceso.centralpos.com/"
                            },
                            "targetNSAlias": "tns",
                            "targetNamespace": "https://acceso.centralpos.com/"
                        },
                        "ErroresGenerales": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                }
            },
            "getPresentacionesFuturas": {
                "input": {
                    "Autenticacion": {
                        "Usuario": "s:string",
                        "Clave": "s:string",
                        "targetNSAlias": "tns",
                        "targetNamespace": "https://acceso.centralpos.com/"
                    }
                },
                "output": {
                    "getPresentacionesFuturasResult": "s:int"
                }
            }
        }
    }
}