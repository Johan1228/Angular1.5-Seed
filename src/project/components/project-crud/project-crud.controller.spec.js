import ProjectCrudController from './project-crud.controller';

describe('Project Crud Controller', () => {

    beforeEach(angular.mock.module('app'));

    var $scope;
    var projectService;
    var toastr;
    var $state;
    var $stateParams;
    var $q;
    var controller;

<<<<<<< HEAD
    beforeEach(angular.mock.inject(( _ProjectService_, _toastr_, _$state_, _$stateParams_, _$q_, _$rootScope_) => {
=======
    beforeEach(angular.mock.inject((_ProjectService_, _toastr_, _$state_, _$stateParams_, _$q_, _$rootScope_) => {
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
        $scope = _$rootScope_.$new();
        toastr = _toastr_;
        $state = _$state_;
        $stateParams = _$stateParams_;
        $q = _$q_;
        projectService = _ProjectService_;
        controller = createController();
    }));

    function createController(_projectService = projectService, _toastr = toastr, _$q = $q, _$state = $state, _$stateParams = $stateParams) {
<<<<<<< HEAD
        let controller = new ProjectCrudController( _projectService, _toastr, _$q, _$state, _$stateParams);
=======
        let controller = new ProjectCrudController(_projectService, _toastr, _$q, _$state, _$stateParams);
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
        return controller;
    }

    describe('Construct', () => {
        it('sets loading to tre on construct', () => {
            $stateParams.id = 1;
            controller = createController();
            expect(controller.loading).toBeTruthy();
        });
    });

    describe('Date Picker Objects', () => {
        it('should have date pickers defined', () => {
            expect(controller.datePickers).toBeDefined();
        });

        describe('Single Date Picker Object', () => {
            it('should have an "opened" property', () => {
                angular.forEach(controller.datePickers, (picker) => {
                    expect(picker.opened).toBeDefined();
                });
            });

            it('should have an boolean opened property', () => {
                angular.forEach(controller.datePickers, (picker) => {
                    expect(typeof picker.opened).toBe('boolean');
                });
            });

            it('should have an open method defined', () => {
                angular.forEach(controller.datePickers, (picker) => {
                    expect(picker.open).toBeDefined();
                });
            });

            it('should have an open method that reverses the opened property', () => {
                angular.forEach(controller.datePickers, (picker, key) => {
                    expect(controller.datePickers[key].opened).toBeFalsy();
                    controller.datePickers[key].open();
                    expect(controller.datePickers[key].opened).toBeTruthy();
                });
            });
        });
    });

    describe('save', () => {

        it('sets loading to true before calling http', () => {
<<<<<<< HEAD
            let project = {title: 'asd'};
=======
            let project = {
                title: 'asd'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            controller._setCurrentProject(project);
            controller._setLoading(false);
            expect(controller.loading).toBeFalsy();
            spyOn(controller, '_setLoading');
            controller.save();
            expect(controller._setLoading).toHaveBeenCalledWith(true);
        });

        it('sets loading to false after create promise resolves', () => {
<<<<<<< HEAD
            let project = {title: 'asd'};
=======
            let project = {
                title: 'asd'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            controller._setCurrentProject(project);
            let defer = $q.defer();
            defer.resolve(project);
            spyOn(controller, '_create').and.returnValue(defer.promise);
            controller.save();
            spyOn(controller, '_setLoading');
            $scope.$apply();
            expect(controller._setLoading).toHaveBeenCalledWith(false);
        });

        it('sets loading to false after update promise resolves', () => {
<<<<<<< HEAD
            let project = {pk: 3, title: 'asd'};
=======
            let project = {
                pk: 3,
                title: 'asd'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            controller._setCurrentProject(project);
            let defer = $q.defer();
            defer.resolve(project);
            spyOn(controller, '_update').and.returnValue(defer.promise);
            controller.save();
            spyOn(controller, '_setLoading');
            $scope.$apply();
            expect(controller._setLoading).toHaveBeenCalledWith(false);
        });

        it('calls _update() when pk is defined', () => {
<<<<<<< HEAD
            let project = {pk: 3, title: 'title saved'};
=======
            let project = {
                pk: 3,
                title: 'title saved'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            let defer = $q.defer();
            defer.resolve(project);

            spyOn(controller, '_update').and.returnValue(defer.promise);
            spyOn(controller.toastr, 'success');
            spyOn(controller.$state, 'go');

            controller._setCurrentProject(project);
            controller.save();
            $scope.$apply();

            expect(controller.toastr.success).toHaveBeenCalled();
            expect(controller.$state.go).toHaveBeenCalled();
        });

        it('calls _create() when pk is undefined', () => {
<<<<<<< HEAD
            let project = {title: 'title saved'};
=======
            let project = {
                title: 'title saved'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            let defer = $q.defer();
            defer.resolve(project);

            spyOn(controller, '_create').and.returnValue(defer.promise);
            spyOn(controller.toastr, 'success');
            spyOn(controller.$state, 'go');

            controller._setCurrentProject(project);
            controller.save();
            $scope.$apply();

            expect(controller.toastr.success).toHaveBeenCalled();
            expect(controller.$state.go).toHaveBeenCalled();
        });
    });

    describe('loadProject', () => {
        it('sets loading true when called', () => {
            spyOn(controller, '_setLoading');
            controller.loadProject();
            expect(controller._setLoading).toHaveBeenCalledWith(true);
        });

        it('sets loading to false once new project promise resolves', () => {
            let defer = $q.defer();
            defer.resolve({});
            spyOn(controller, '_newProject').and.returnValue(defer.promise);
            controller.loadProject();
            spyOn(controller, '_setLoading');
            $scope.$apply();
            expect(controller._setLoading).toHaveBeenCalledWith(false);
        });

        it('sets loading to false once  fetch promise resolves', () => {
            let defer = $q.defer();
            defer.resolve({});
            spyOn(controller, '_fetchProject').and.returnValue(defer.promise);
            controller.loadProject(1);
            spyOn(controller, '_setLoading');
            $scope.$apply();
            expect(controller._setLoading).toHaveBeenCalledWith(false);
        });

        it('sets loading to false once  fetch promise rejects', () => {
            let defer = $q.defer();
            defer.reject({});
            spyOn(controller, '_fetchProject').and.returnValue(defer.promise);
            controller.loadProject(1);
            spyOn(controller, '_setLoading');
            $scope.$apply();
            expect(controller._setLoading).toHaveBeenCalledWith(false);
        });

        it('should load a new project with _setCurrentProject method', () => {
            let defer = $q.defer();
<<<<<<< HEAD
            defer.resolve({test: 'test'});
=======
            defer.resolve({
                test: 'test'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            spyOn(controller, '_newProject').and.returnValue(defer.promise);
            spyOn(controller, '_setCurrentProject');
            controller.loadProject();
            $scope.$apply();
            expect(controller._setCurrentProject).toHaveBeenCalled();
        });

        it('should call fetch project when project id is passed', () => {
            let defer = $q.defer();
            spyOn(controller, '_fetchProject').and.returnValue(defer.promise);
            controller.loadProject(3);
            expect(controller._fetchProject).toHaveBeenCalled();
        });

        it('should set project if service resolves successfully', () => {
            let defer = $q.defer();
<<<<<<< HEAD
            defer.resolve({title: 'title'});
=======
            defer.resolve({
                title: 'title'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            spyOn(controller, '_fetchProject').and.returnValue(defer.promise);
            spyOn(controller, '_setCurrentProject');
            controller.loadProject(3);
            $scope.$apply();
            expect(controller._setCurrentProject).toHaveBeenCalled();
        });

        it('should error with toastr and change state', () => {
            let defer = $q.defer();
            defer.reject();
            spyOn(controller, '_fetchProject').and.returnValue(defer.promise);
            spyOn(controller.toastr, 'error').and.returnValue(false);
            spyOn(controller.$state, 'go').and.returnValue(false);
            controller.loadProject(3);
            $scope.$apply();
            expect(controller.toastr.error).toHaveBeenCalled();
            expect(controller.$state.go).toHaveBeenCalled();
        });
    });

    describe('_getCurrentProject', () => {
        it('should return the controller project object', () => {
<<<<<<< HEAD
            let project = {title: 'current title'};
=======
            let project = {
                title: 'current title'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            controller.project = project;
            expect(controller._getCurrentProject()).toEqual(project);
        });
    });

    describe('_setCurrentProject', () => {
        it('should set the project on the controller', () => {
<<<<<<< HEAD
            let project = {'project': 'should be set'};
=======
            let project = {
                'project': 'should be set'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            expect(controller.project).not.toEqual(project);
            controller._setCurrentProject(project);
            expect(controller.project).toEqual(project);
        });
    });

    describe('_newProject', () => {
        it('should return a promise', () => {
            let defer = $q.defer();
            spyOn(controller.projectService, 'getNewProjectDefaults').and.returnValue(defer.promise);
            let promise = controller._newProject();
            expect(promise.constructor.name).toBe('Promise');
        });
    });

    describe('_fetchProject', () => {
        it('should return a promise', () => {
            spyOn(controller.projectService, 'fetch').and.returnValue($q.defer().promise);

            let promise = controller._fetchProject(3);

            expect(promise.constructor.name).toBe('Promise');
        });

        it('should call service fetch method', () => {
            spyOn(controller.projectService, 'fetch').and.returnValue($q.defer().promise);

            let promise = controller._fetchProject(3);

            expect(controller.projectService.fetch).toHaveBeenCalled();
        });

        it('should return service data when resolves', () => {
            let fetchPromise = $q.defer();
<<<<<<< HEAD
            let project = {title: 'fetched title'};
            fetchPromise.resolve({data: project});
=======
            let project = {
                title: 'fetched title'
            };
            fetchPromise.resolve({
                data: project
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0

            spyOn(controller.projectService, 'fetch').and.returnValue(fetchPromise.promise);
            let controllerReturn = controller._fetchProject(3);

            expect(controllerReturn.constructor.name).toBe("Promise");
            controllerReturn.then((returnValue) => {
                expect(returnValue).toBe(project);
            }, () => {
                fail();
            });

            $scope.$apply();
        });

        it('should reject when service fails', (done, fail) => {
            let fetchPromise = $q.defer();
            fetchPromise.reject();

            spyOn(controller.projectService, 'fetch').and.returnValue(fetchPromise.promise);
            let controllerReturn = controller._fetchProject(3);

            expect(controllerReturn.constructor.name).toBe("Promise");
            controllerReturn.then((returnValue) => {
                fail();
            }, () => {
                done();
            });

            $scope.$apply();
        });
    });

    describe('_create', () => {
        it('should return a promise', () => {
<<<<<<< HEAD
            let defer = controller._create({title: 'title'});
=======
            let defer = controller._create({
                title: 'title'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            expect(defer.constructor.name).toBe("Promise");
        });

        it('should call project service create', () => {
            let serviceDeferred = $q.defer();
            spyOn(controller.projectService, 'create').and.returnValue(serviceDeferred.promise);

<<<<<<< HEAD
            serviceDeferred.resolve({pk: '1', title: 'title'});
            controller._create({title: 'tester'});
=======
            serviceDeferred.resolve({
                pk: '1',
                title: 'title'
            });
            controller._create({
                title: 'tester'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0

            expect(controller.projectService.create).toHaveBeenCalled();
        });

        it('should resolve once project service create resolves', () => {
<<<<<<< HEAD
            let serviceReturn = {pk: 2, title: 'title from service'};
            let createDeferred = $q.defer();
            spyOn(controller.projectService, 'create').and.returnValue(createDeferred.promise);
            
            createDeferred.resolve(serviceReturn);
            let promise = controller._create({title: 'title to controller'});

            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
               expect(returnValue).toEqual(serviceReturn); 
=======
            let serviceReturn = {
                pk: 2,
                title: 'title from service'
            };
            let createDeferred = $q.defer();
            spyOn(controller.projectService, 'create').and.returnValue(createDeferred.promise);

            createDeferred.resolve(serviceReturn);
            let promise = controller._create({
                title: 'title to controller'
            });

            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
                expect(returnValue).toEqual(serviceReturn);
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            });
            $scope.$apply();

        });

        it('should set validation when service create rejects', () => {
<<<<<<< HEAD
            let serviceReturn = {status: 400, data: {title: 'title is required'}};
=======
            let serviceReturn = {
                status: 400,
                data: {
                    title: 'title is required'
                }
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            let createDeferred = $q.defer();
            spyOn(controller.projectService, 'create').and.returnValue(createDeferred.promise);
            spyOn(controller, '_setValidation');

            createDeferred.reject(serviceReturn);
<<<<<<< HEAD
            let promise = controller._create({title: 'title to controller'});

            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
               expect(returnValue).toEqual(serviceReturn); 
               expect(controller._setValidation).toHaveBeenCalled();
=======
            let promise = controller._create({
                title: 'title to controller'
            });

            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
                expect(returnValue).toEqual(serviceReturn);
                expect(controller._setValidation).toHaveBeenCalled();
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            });

            $scope.$apply();
        });
    });

    describe('_update', () => {

        it('should return a promise', () => {
<<<<<<< HEAD
            let defer = controller._update({pk: 1, title: 'test title'});
=======
            let defer = controller._update({
                pk: 1,
                title: 'test title'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            expect(defer.constructor.name).toBe("Promise");
        });

        it('should call project service update', () => {
            let defer = $q.defer();
            let updateDeferred = $q.defer();
<<<<<<< HEAD
            updateDeferred.resolve({pk: '1', title: 'title'});
            spyOn(controller.projectService, 'update').and.returnValue(updateDeferred.promise);
            controller._update({pk: 2, title: 'tester'});
=======
            updateDeferred.resolve({
                pk: '1',
                title: 'title'
            });
            spyOn(controller.projectService, 'update').and.returnValue(updateDeferred.promise);
            controller._update({
                pk: 2,
                title: 'tester'
            });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            expect(controller.projectService.update).toHaveBeenCalled();
        });

        it('should resolve once project service update resolves', () => {
<<<<<<< HEAD
            let serviceReturn = {pk: 2, title: 'title from service'};
=======
            let serviceReturn = {
                pk: 2,
                title: 'title from service'
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            let updateDeferred = $q.defer();
            updateDeferred.resolve(serviceReturn);
            spyOn(controller.projectService, 'update').and.returnValue(updateDeferred.promise);

<<<<<<< HEAD
            let promise = controller._update({pk: 2, title: 'title to controller'});
            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
               expect(returnValue).toEqual(serviceReturn); 
=======
            let promise = controller._update({
                pk: 2,
                title: 'title to controller'
            });
            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
                expect(returnValue).toEqual(serviceReturn);
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            });
            $scope.$apply();

        });

        it('should set validation when service rejects', () => {
            let defer = $q.defer();
<<<<<<< HEAD
            let serviceReturn = {status: 400, data: {title: 'title is required'}};
=======
            let serviceReturn = {
                status: 400,
                data: {
                    title: 'title is required'
                }
            };
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            let updateDeferred = $q.defer();
            updateDeferred.reject(serviceReturn);
            spyOn(controller.projectService, 'update').and.returnValue(updateDeferred.promise);
            spyOn(controller, '_setValidation');

<<<<<<< HEAD
            let promise = controller._update({pk: 2, title: 'title to controller'});
            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
               expect(returnValue).toEqual(serviceReturn); 
=======
            let promise = controller._update({
                pk: 2,
                title: 'title to controller'
            });
            expect(promise.constructor.name).toBe('Promise');
            promise.then((returnValue) => {
                expect(returnValue).toEqual(serviceReturn);
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0
            });
            $scope.$apply();
            expect(controller._setValidation).toHaveBeenCalled();

        });
    });

    describe('_setValidation', () => {
        it('sets validation object with valid input', () => {
            let validationMock = {
                tite: [
                    'title is required',
                    'title needs to be shorter than 255 characters'
                ],
                description: [
                    'description is required'
                ]
            };

            controller._setValidation(validationMock);
            expect(controller.validation).toEqual(validationMock);
        });

        it('sets an empty object if no validation is passed', () => {
            controller._setValidation({});

            expect(controller.validation).toEqual({});
        });

        it('silently set an empty objects when invalid syntax is passed', () => {
            controller._setValidation(['invalid text']);

            expect(controller.validation).toEqual({});
        });
<<<<<<< HEAD
    }); 
=======
    });
>>>>>>> c4a54b8c763cc0927669beffe2df7ca7eea176a0

    describe('_setLoading', () => {
        it('should change loading value', () => {
            controller._setLoading(true);
            expect(controller.loading).toBeTruthy();
            controller._setLoading(false);
            expect(controller.loading).toBeFalsy();
            controller._setLoading(true);
            expect(controller.loading).toBeTruthy();
        });
    });
});
