'utf-8';

// �y�[�W�̓ǂݍ��݂�҂�
window.addEventListener('load', init);

function init() {
    // �T�C�Y���w��
    const width = 960;
    const height = 540;
    let rot = 0; // �p�x
    let mouseX = 0; // �}�E�X���W

    // �����_���[���쐬
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
    });
    renderer.setSize(width, height);

    // �V�[�����쐬
    const scene = new THREE.Scene();

    // �J�������쐬
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);   //(��p,�A�X�y�N�g��,�`��J�n����,�`��I������)
    camera.position.set(0, 500, +1000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // �R���e�i�[���쐬
    const container = new THREE.Object3D();
    scene.add(container);

    // �}�e���A�����쐬
    const material1 = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        wireframe: true,
        side: THREE.DoubleSide
    });

    // ���s����
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    // �V�[���ɒǉ�
    scene.add(directionalLight);
    // �������쐬
    const ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    // ���̂��쐬
    const geometry = new THREE.SphereGeometry(300, 30, 30);    //(��,����,���s��)
    // �摜��ǂݍ���
    const loader = new THREE.TextureLoader();
    const texture = loader.load('image/earthmap1k.jpg');
    // �}�e���A���Ƀe�N�X�`���[��ݒ�
    const material2 = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    // ���b�V�����쐬
    const earthMesh = new THREE.Mesh(geometry, material2);
    // 3D��ԂɃ��b�V����ǉ�
    scene.add(earthMesh);

    // �W�I���g�����쐬
    const geometryList = [
        new THREE.SphereGeometry(50),   //����
        new THREE.BoxGeometry(100, 100, 100), //������
        new THREE.PlaneGeometry(100, 100),   //����
        new THREE.TetrahedronGeometry(100, 0),   //�J�v�Z���`��
        new THREE.ConeGeometry(100, 100, 32), //�O�p��
        new THREE.CylinderGeometry(50, 50, 100, 32),   //�~��
        new THREE.TorusGeometry(50, 30, 16, 100)   //�h�[�i�c��
    ];

    geometryList.map((geometry, index) => {
        //�`��ƃ}�e���A�����烁�b�V�����쐬���܂�
        const mesh = new THREE.Mesh(geometry, material1);

        //3D�\���C���X�^���X��scene�v���p�e�B�[��3D�\����ԂƂȂ�܂�
        container.add(mesh);

        //�~����ɔz�u
        mesh.position.x = 400 * Math.sin((index / geometryList.length) * Math.PI * 2);
        mesh.position.z = 400 * Math.cos((index / geometryList.length) * Math.PI * 2);
    });

    // �������쐬���܂� (�J�����̓������킩��₷�����邽��)
    createStarField();

    /** �������쐬���܂� */
    function createStarField() {
        // ���_�����쎌�G
        const vertices = [];
        for (let i = 0; i < 1000; i++) {
            const x = 3000 * (Math.random() - 0.5);
            const y = 3000 * (Math.random() - 0.5);
            const z = 3000 * (Math.random() - 0.5);

            vertices.push(x, y, z);
        }

        // �`��f�[�^���쐬
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        // �}�e���A�����쐬
        const material = new THREE.PointsMaterial({
            size: 10,
            color: 0xffffff,
        });

        // ���̂��쐬
        const mesh = new THREE.Points(geometry, material);
        scene.add(mesh);
    }


    // �}�E�X���W�̓}�E�X�����������̂ݎ擾�ł���
    document.addEventListener('mousemove', (event) => {
        mouseX = event.pageX;
    });

    tick();

    //���t���[�����Ɏ��s����郋�[�v�C�x���g�ł�
    function tick() {
        // �}�E�X�̈ʒu�ɉ����Ċp�x��ݒ�
        // �}�E�X��x���W���X�e�[�W�̕��̉�%�ɂ��邩���ׂĂ����360�x�ŏ�Z����
        const targetRot = (mouseX / window.innerWidth) * 360;
        // �C�[�W���O�̌�����p���Ċ��炩�ɂ���
        // �l += (�ڕW�l - ���݂̒l) * �����l
        rot += (targetRot - rot) * 0.02;

        // ���W�A���ɕϊ�����
        const radian = (rot * Math.PI) / 180;
        // �p�x�ɉ����ăJ�����̈ʒu��ݒ�
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);
        // ���_���������߂�
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        //���b�V������]������
        earthMesh.rotation.y += 0.005;
        container.rotation.y += 0.01;

        renderer.render(scene, camera); //�����_�����O

        requestAnimationFrame(tick);
    }
}